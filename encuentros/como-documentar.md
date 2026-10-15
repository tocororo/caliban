---
title: Cómo documentar un encuentro
description: Plantilla para archivar encuentros en Caliban.
image: /media/02-banner-horizontal.jpeg
imageAlt: Jungla cyberpunk con figuras biomecánicas
tag: Guía · plantilla
meta: → ver la plantilla
---

# Cómo documentar un encuentro

> [!INFO] Regla de oro
> Ningún encuentro existe si no deja huella. Cada sesión debe publicar su página en `/encuentros/` antes del siguiente encuentro.

## Plantilla

Copia este esqueleto para el archivo `encuentros/NNN-titulo-corto.md`:

```md
---
title: "NNN · Título del encuentro"
description: Una línea de qué pasó.
date: AAAA-MM-DD
image: /media/NN-imagen.jpeg
imageAlt: Descripción de la imagen para lectores de pantalla
---

<div class="page-banner">
  <img src="/media/04-banner-horizontal.jpeg" alt="Descripción de la imagen" />
  <div class="page-banner__text">
    <h1>NNN · Título</h1>
    <p>// AAAA-MM-DD · lugar · Nº participantes</p>
  </div>
</div>

![Registro visual](/media/04-banner-horizontal.jpeg){.jungle-img}

## Qué hicimos
## Qué quedó
## Ficha
```

## Convenciones

- **Imagen:** usa una de `media/` como registro visual principal. Nómbrala en la ficha. La tarjeta del índice se genera sola desde el frontmatter (`title`, `description`, `date`, `image`, `imageAlt`): no hay que editar `encuentros/index.md` a mano.
- **Fecha:** formato ISO `AAAA-MM-DD` en el frontmatter y en la tabla de `encuentros/index.md`.
- **Enlaces:** en Markdown usa rutas absolutas raíz (`/encuentros/...`, `/textos/...`); VitePress añade la base `/caliban/` al compilar. Solo en HTML crudo (`<a href="...">`) escribe la base completa `/caliban/...`.
- **Tono:** crónica en primera persona del plural, español claro, sin jerga innecesaria.

## Lista de verificación

- [ ] Página creada en `/encuentros/`
- [ ] Imagen del registro en `public/media/` y referenciada en el frontmatter (`image`, `imageAlt`)
- [ ] Entrada añadida a la tabla de [la bitácora](/encuentros/)
- [ ] Entrada añadida al `sidebar` en `.vitepress/config.mjs`
- [ ] Imagen con `alt` descriptivo y clase `.jungle-img`
