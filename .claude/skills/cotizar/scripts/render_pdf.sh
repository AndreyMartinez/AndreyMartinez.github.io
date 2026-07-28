#!/bin/bash
# Convierte un HTML de cotización a PDF y lo deja en ~/Downloads.
# Uso: render_pdf.sh <archivo.html> <nombre-salida.pdf>
set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Uso: render_pdf.sh <archivo.html> <nombre-salida.pdf>" >&2
  exit 1
fi

INPUT_HTML="$1"
OUTPUT_NAME="$2"
DOWNLOADS="$HOME/Downloads"

if [ ! -f "$INPUT_HTML" ]; then
  echo "Error: no existe el archivo $INPUT_HTML" >&2
  exit 1
fi

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ ! -x "$CHROME" ]; then
  echo "Error: no se encontró Google Chrome en $CHROME" >&2
  exit 1
fi

# Validar que las etiquetas HTML estén balanceadas antes de renderizar.
# Un <div> o <table> sin cerrar produce un PDF con el layout roto y no siempre es obvio a simple vista.
python3 - "$INPUT_HTML" << 'PYEOF'
import re, sys
path = sys.argv[1]
content = open(path, encoding="utf-8").read()
# Quitar el bloque <style> antes de validar: comentarios CSS pueden contener
# texto como "<ul>" dentro de una nota, y no son markup real.
content = re.sub(r"<style\b[^>]*>.*?</style>", "", content, flags=re.DOTALL)
problems = []
for tag in ["div","h1","h2","h3","h4","p","ul","li","table","tr","td","th","span","a"]:
    o = len(re.findall(rf"<{tag}(?:\s[^>]*)?>", content))
    c = len(re.findall(rf"</{tag}>", content))
    if o != c:
        problems.append(f"  {tag}: open={o} close={c}")
if problems:
    print("✗ Estructura HTML desbalanceada:")
    print("\n".join(problems))
    sys.exit(1)
print("✓ Estructura HTML balanceada")
PYEOF

ABS_HTML="$(cd "$(dirname "$INPUT_HTML")" && pwd)/$(basename "$INPUT_HTML")"
TMP_PDF="$(mktemp -t cotizar-pdf).pdf"

"$CHROME" --headless --disable-gpu --no-sandbox \
  --print-to-pdf="$TMP_PDF" \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  "file://$ABS_HTML" \
  2>&1 | grep -v "CVDisplayLink\|ERROR:ui\|gcm\|allocator\|DEPRECATED_ENDPOINT" || true

if [ ! -s "$TMP_PDF" ]; then
  echo "Error: Chrome no generó el PDF" >&2
  exit 1
fi

mkdir -p "$DOWNLOADS"
cp "$TMP_PDF" "$DOWNLOADS/$OUTPUT_NAME"
rm -f "$TMP_PDF"

echo "✓ PDF listo: $DOWNLOADS/$OUTPUT_NAME"
