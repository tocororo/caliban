# AGENTS.md — Caliban

Este archivo proporciona instrucciones a los agentes de código (como OpenCode) para trabajar en el proyecto **Caliban**, un sitio estático en español construido con VitePress y Vue 3, con presentaciones electrónicas hechas con Slidev.

## 1. Contexto del Proyecto

- **Propósito**: Blog y bitácora del "Taller abierto de inteligencia artificial y sociedad". Cada encuentro tiene su crónica y una presentación electrónica asociada.
- **Stack**: VitePress (Vue 3), Slidev (presentaciones), Node.js v24.
- **Idioma**: El contenido y la interfaz están en **español**.
- **Repositorio**: `https://github.com/tocororo/caliban.git`
- **Sitio publicado**: `https://tocororo.github.io/caliban`
- **Base URL**: La configuración de VitePress usa `base: '/caliban/'`. Esto es crucial para las rutas de los enlaces y de las presentaciones.

## 2. Comandos Esenciales

| Comando | Descripción |
| :--- | :--- |
| `npm install` | Instala las dependencias. |
| `npm run dev` | Servidor de desarrollo VitePress en `http://localhost:5173/caliban/`. |
| `npm run build` | Compila **presentaciones + sitio** para producción. |
| `npm run preview` | Previsualiza la compilación de producción localmente. |
| `npm run slides:dev -- <slug>` | Sirve una presentación Slidev en caliente (`http://localhost:3030/`). |
| `npm run slides:build` | Compila todas las presentaciones a `public/slides/<slug>/`. |

**Verificación**: antes de dar por finalizada una tarea, ejecutar `npm run build` para asegurar que no haya errores de compilación (ni de VitePress ni de Slidev).

## 3. Estructura del Proyecto

| Ruta | Descripción |
| :--- | :--- |
| `index.md` | Portada del sitio. |
| `encuentros/` | Bitácora de encuentros (índice, crónicas, plantilla). |
| `textos/` | Blog de ensayos (índice, manifiesto, ensayo de ejemplo). |
| `acerca-de.md` | Información sobre los propósitos y cómo participar. |
| `media/` | **Fuente** de las imágenes del sitio. |
| `public/media/` | **Espejo** de `media/` para servir en la web. |
| `slides/<slug>/` | **Fuente** de las presentaciones (Slidev). |
| `public/slides/<slug>/` | **Salida** compilada de cada presentación (generada por `npm run slides:build`, no editar a mano). |
| `.vitepress/config.mjs` | Configuración de VitePress: navegación, sidebar, `lang: 'es-ES'`, `base: '/caliban/'`, `srcExclude: ['slides/**']`. |
| `.vitepress/theme/` | Tema personalizado (`CalibanHero`, `JungleDivider`, `custom.css`). |
| `scripts/build-slides.sh` | Script que recorre `slides/*/` y compila cada presentación con el `--base` correcto. |
| `.github/workflows/deploy.yml` | Despliegue automático a GitHub Pages en cada push a `main`. |

### ⚠️ Convención Crítica: Imágenes

Siempre que añadas una imagen nueva al sitio:
1. Guárdala en `media/` (fuente).
2. Cópiala también a `public/media/` (espejo servido en la web).

Las imágenes que uses **dentro de una presentación Slidev** no van aquí: se colocan junto al `slides.md` (por ejemplo, `slides/<slug>/img/`) y se referencian con rutas relativas. Slidev las empaqueta en el build.

## 4. Presentaciones con Slidev

Las presentaciones acompañan a cada encuentro y se escriben en Markdown con Slidev.

### Ubicación y convención de nombres

- **Fuente**: `slides/<slug>/slides.md`
- **Salida compilada**: `public/slides/<slug>/`
- **URL pública**: `/caliban/slides/<slug>/`
- **Regla**: `<slug>` es el mismo identificador del encuentro (por ejemplo, `encuentro-2025-03-15`). Así el embed es trivial y la trazabilidad entre crónica y presentación se mantiene.

### Configuración clave (no romper)

- En `.vitepress/config.mjs` debe existir `srcExclude: ['slides/**']`. Sin esto, VitePress intentaría publicar cada `slides.md` como página, rompiendo el build o generando rutas basura.
- Slidev **necesita** compilarse con `--base /caliban/slides/<slug>/`. El script `scripts/build-slides.sh` se encarga de esto. **No compilar a mano sin `--base`**: los assets (fuentes, JS, imágenes) quedarían con rutas incorrectas y la presentación se vería en blanco en producción.

### Crear una nueva presentación

1. Crea la carpeta: `mkdir -p slides/<slug>`.
2. Crea `slides/<slug>/slides.md` con un frontmatter mínimo:
   ```yaml
   ---
   theme: default
   title: Título del encuentro
   author: Caliban
   ---