# Portafolio — Raphael Martínez

Sitio personal estático. Un solo archivo `index.html`, sin dependencias ni build.
Los logos van incrustados en el HTML, así que no hay rutas de imágenes que se puedan romper.

---

## Publicarlo en GitHub Pages

### 1. Crea el repositorio con el nombre exacto

En GitHub, crea un repo **público** llamado:

```
AndreyMartinez.github.io
```

El nombre importa. Con ese nombre exacto, GitHub lo publica en la raíz de tu dominio:
`https://andreymartinez.github.io`

> El repo `AndreyMartinez/AndreyMartinez` que ya tienes es distinto: es el **repo de perfil**,
> y su README es lo que se muestra en tu página de GitHub. Ese déjalo como está.

### 2. Sube el archivo

Por la web: **Add file → Upload files**, arrastra `index.html`, y confirma con *Commit changes*.

O por terminal:

```bash
git clone https://github.com/AndreyMartinez/AndreyMartinez.github.io.git
cd AndreyMartinez.github.io
# copia aquí index.html y README.md
git add .
git commit -m "Publica el portafolio"
git push
```

### 3. Activa Pages

**Settings → Pages → Build and deployment**
- Source: `Deploy from a branch`
- Branch: `main` · carpeta `/ (root)`
- Guarda.

En uno o dos minutos queda en línea. El primer despliegue a veces tarda un poco más.

---

## Dominio propio (opcional, recomendado)

Un dominio como `raphaelmartinez.com` cuesta alrededor de 200–400 MXN al año y se ve
mucho mejor en una CV y en una propuesta a cliente.

1. Compra el dominio (Namecheap, Cloudflare, Porkbun).
2. En el DNS del dominio, crea cuatro registros `A` apuntando a:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. En **Settings → Pages → Custom domain**, escribe tu dominio y guarda.
4. Activa **Enforce HTTPS** cuando se habilite la casilla.

---

## Editar el contenido

Todo el texto está directo en `index.html`, en español y con comentarios por sección
(`<!-- ===== Proyectos ===== -->`, etc.). Para agregar un proyecto, copia un bloque
`<a class="proj rise">` y cambia el enlace, el título y la descripción.

Los colores y tipografías están en las variables CSS del inicio del archivo (`:root`),
así que se cambian desde un solo lugar.
