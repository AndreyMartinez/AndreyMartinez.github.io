---
name: cotizar
description: Genera una cotización o propuesta profesional en PDF con el sistema de diseño personal de Raphael (portada oscura, tipografías Instrument Sans/Inter/JetBrains Mono, acento verde #154E4A) y la guarda en ~/Downloads. Actívala cuando el usuario escriba /cotizar, o pida generar una cotización, propuesta, presupuesto o "quote" para un proyecto freelance, un cliente, o un servicio (cursos, capacitaciones, consultoría) — incluso si no usa la palabra "cotización" literalmente pero describe un trabajo con alcance, horas y una tarifa a cobrar.
---

# Cotizar

Genera documentos de cotización/propuesta en PDF para el trabajo freelance de Raphael, reutilizando siempre el mismo sistema de diseño para que sus clientes reconozcan la marca personal entre propuestas.

## Flujo

1. **Entrevistar** — reunir los datos necesarios (abajo). No asumas nada que cambie el precio final: tarifa, horas y moneda siempre se preguntan, nunca se heredan de una cotización anterior salvo que el usuario lo diga explícitamente.
2. **Decidir el formato** — completo (5 páginas) o compacto (2 páginas), según el tamaño real del proyecto (criterio abajo).
3. **Componer el HTML** — copiar `assets/base.html` como punto de partida y construir el contenido usando las clases CSS ya definidas ahí (portada, tabla de horas, invest-box, etc.). No reinventes el CSS ni cambies la paleta.
4. **Renderizar** — ejecutar `scripts/render_pdf.sh <archivo.html> <nombre-salida.pdf>`. El script valida que el HTML esté bien formado, convierte con Chrome headless, y copia el resultado a `~/Downloads`. Repórtale al usuario la ruta final.

## Datos a preguntar

Pregunta lo que falte de esta lista — si el usuario ya dio algunos datos en su mensaje (como pasó con la cotización del curso de IA, donde vino todo en una imagen), no los vuelvas a pedir:

- **Nombre del proyecto/servicio** y una frase que lo resuma (va en la portada).
- **Alcance funcional** — qué incluye, como lista de módulos o entregables.
- **Horas** — desglosadas por tarea/módulo, no solo un total. Si el usuario da un número total y un límite de tiempo (p.ej. "que quede en 2 semanas de 8h/día"), hace la división vos: calcula el total de horas que implica ese calendario y arma un desglose por tarea que sume exactamente esa cifra.
- **Tarifa por hora y moneda** (COP, MXN, USD...). Nunca la asumas de una cotización anterior en esta misma sesión — cada proyecto puede tener cliente, moneda o acuerdo distinto.
- **Cronograma** — duración total y, si aplica, fechas fijas (como en la cotización de sesiones de curso, donde había fechas y horarios concretos).
- **Exclusiones o supuestos** — cualquier cosa que el alcance explícitamente NO cubre. Ver la sección de juicio profesional abajo: en ciertos proyectos esto es tan importante como el precio.
- **Trabajos anteriores relevantes** (opcional, solo en el formato completo) — pide ejemplos reales; nunca inventes uno.

## Formato completo vs. compacto

**Completo (5 páginas: portada · entendimiento+alcance · horas+cronograma · inversión+exclusiones · trabajos anteriores+contacto)** — para proyectos grandes o cuando el cliente pidió explícitamente ejemplos de trabajo anterior. Usa `.understand-grid`, `.modules`, `.work-grid`, `.about`.

**Compacto (2 páginas: portada · todo el contenido)** — para scripts, ajustes pequeños, o cotizaciones internas (como pasarle costos a un colaborador antes de ir al cliente final). Un documento de 5 páginas para un trabajo de $400.000 COP se ve desproporcionado y puede jugar en contra. Omite `.work-grid`/`.about` si no hay nada honesto que mostrar (ver más abajo), y usa `.modules` con menos ítems.

Si no es obvio cuál usar, pregúntale al usuario en vez de asumir.

## Componentes disponibles (definidos en `assets/base.html`)

| Sección | Clases CSS |
|---|---|
| Portada | `.cover`, `.cover-eyebrow`, `.cover-sub` |
| Entendimiento del proyecto | `.lede`, `.understand-grid` + `.u-card` (tarjetas 2x2) |
| Alcance funcional | `.modules` + `.module` (lista numerada) |
| Plan de horas | `table.hours` (usa `tr.subtotal` para un subtotal intermedio antes del total en `tfoot`) |
| Cronograma con fechas fijas | `table.program` (columnas: sesión, contenido, fecha, horario) |
| Cronograma por semana/día | `.weeks` + `.week` (tarjetas) + `.cadence` |
| Inversión | `.invest-box` (monto + tarifa) + `.terms` + `.terms-row` (forma de pago, vigencia, soporte) |
| Nota destacada / advertencia | `.note-box` — úsala para la aclaración MÁS importante del documento, no para relleno |
| Exclusiones | `.excl-list` |
| Ruta Fase 1 → Fase 2 | `.roadmap` + `.rm-card` (con `.now` en la tarjeta activa) |
| Trabajos anteriores | `.work-grid` + `.work-card` |
| Sobre mí / contacto | `.about` + `.contact-list` (agrega `.two-col` al `<ul>` si no hay bloque "sobre mí" al lado) + `.stack-tags` |
| Cierre | `.closing` |

## Juicio profesional — esto es lo que hace la diferencia entre una cotización útil y una que le hace daño a Raphael

Estas reglas salieron de casos reales trabajados con él. No son burocracia — cada una evitó un problema concreto.

**No diluyas la tarifa en silencio.** Si el usuario pide bajar el precio total, la forma correcta es reducir horas (recortando alcance real), no bajar el número de la tarifa por hora manteniendo las mismas horas — eso contradice cualquier validación de mercado que se haya hecho antes y sienta un precedente bajo. Si aun así el usuario insiste en bajar la tarifa después de que se lo señalaste una vez, es su decisión — no insistas una segunda vez en el mismo documento, pero sí dejalo dicho una vez con el número exacto de lo que representa (ej. "el valor total del contrato cae X%").

**Cuando el recorte de horas es agresivo (más del ~50% del estimado realista), decilo explícito y con el número.** No hace falta un párrafo largo cada vez — una frase con el porcentaje y qué específicamente se sacrifica alcanza. Si el proyecto involucra dinero de terceros (pasarelas de pago) o datos sensibles (autenticación, información personal), el estándar es más alto: ahí un recorte agresivo no es "menos pulido", es riesgo real de que algo falle con consecuencias — vale la pena ofrecer explícitamente la opción de un MVP honesto (alcance más chico pero descrito con precisión) en vez de prometer todo el alcance original en muy pocas horas.

**Nunca fabriques trabajos anteriores.** Si el cliente pide ejemplos y Raphael no tiene experiencia real en la tecnología específica pedida (pasó con un proyecto en Python cuando su stack es React/Next.js/Go/Node/Java), no inventes un proyecto que no existe. Omití la sección de trabajos anteriores, o la reemplazás con experiencia real y transferible descrita con honestidad (p.ej. "experiencia en integración de APIs en otro stack, aplicada aquí"), pero jamás con un caso de estudio ficticio.

**Leé el brief completo del cliente en busca de instrucciones de selección ocultas.** Algunos clientes en plataformas freelance piden mencionar una palabra clave específica en la propuesta para confirmar que se leyó todo el detalle (es un filtro anti-spam común). Si encontrás una instrucción así, avisale a Raphael que la viste, y si aplica, incorporala de forma natural dentro del texto — lo ideal es que quede dentro de una frase que demuestre haber entendido los requisitos punto por punto, no como una nota suelta y genérica al final.

**Si dos cotizaciones para el mismo cliente/proyecto terminan muy distantes en precio**, señalalo antes de generar el PDF final: enviar directo el número más bajo sin pasar por uno intermedio deja a Raphael sin margen de negociación si el cliente regatea.

## Después de generar

Decile a Raphael la ruta del PDF final y un resumen de 2-3 líneas de las decisiones de formato/precio que tomaste (igual que se hizo en esta conversación) — no asumas que quiere que sigas de largo sin ver el resumen.
