# Caliban — Taller abierto de inteligencia artificial y sociedad

Sitio estático en español construido con **VitePress** (Vue 3) y Node.js v24.
Publicado en **https://tocororo.github.io/caliban** desde el repo `https://github.com/tocororo/caliban.git`.

## Requisitos

- Node.js v24 (`node -v` → `v24.x`)

## Uso

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173/caliban/
npm run build    # compila a .vitepress/dist/
npm run preview  # previsualiza la compilación
```

## Estructura

| Ruta | Qué es |
|---|---|
| `index.md` | Portada con hero cyber-jungla, manifiesto y accesos |
| `encuentros/` | Bitácora de encuentros (índice + crónicas + plantilla) |
| `textos/` | Blog de ensayos (índice + manifiesto + ensayo ejemplo) |
| `acerca-de.md` | Propósitos, quiénes y cómo participar |
| `media/` | **Fuente** de imágenes (las de referencia ya están aquí) |
| `public/media/` | Espejo de `media/` para servir en web (VitePress solo publica `public/`). Si añades una imagen a `media/`, cópiala también a `public/media/` |
| `.vitepress/config.mjs` | Navegación `nav` + `sidebar` en español, `lang: 'es-ES'`, `base: '/caliban/'` |
| `.vitepress/theme/index.js` | Tema que importa `custom.css` y registra `CalibanHero`, `JungleDivider` |
| `.vitepress/theme/custom.css` | Paleta cyber-jungla, glows neón, hero, tarjetas, banners |
| `.vitepress/theme/components/` | `CalibanHero.vue`, `JungleDivider.vue` |
| `.github/workflows/deploy.yml` | Despliegue automático a GitHub Pages al hacer push a `main` |

## Publicar

1. `git init && git add . && git commit -m "Sitio Caliban"`
2. `git remote add origin https://github.com/tocororo/caliban.git && git push -u origin main`
3. En GitHub: **Settings → Pages → Source: GitHub Actions**.
4. Cada push a `main` reconstruye y publica automáticamente.

## Convenciones de enlaces

- En **Markdown**: rutas raíz (`/encuentros/...`, `/textos/...`, `/media/...`). VitePress añade la base `/caliban/` al compilar.
- En **HTML crudo** (`<a href>`, `<img src>` dentro del Markdown): escribe la base completa (`/caliban/encuentros/...`) o usa `withBase()` en componentes Vue.
