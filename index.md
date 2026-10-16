---
layout: home
title: Caliban
titleTemplate: Taller abierto de inteligencia artificial y sociedad
hero:
  name: Caliban
  text: "Taller abierto de inteligencia artificial y sociedad"
  tagline: 

features:
  - title: "Encuentros"
    details: "Fechas, registros visuales y crónicas de cada sesión."
    link: /encuentros/
    linkText: Abrir la bitácora
  - title: "Textos"
    details: "Ensayos, artículos y reflexiones críticas sobre IA, tecnología y sociedad."
    link: /textos/
    linkText: Leer y remezclar
proximo:
  fecha: 3 de Noviembre a las 10:00 AM
  lugar: Edificio de Rectoría - Biblioteca de Ciencias Técnicas
  titulo: "Encuentro 001: La Jungla"
  link: "/encuentros/001-la-jungla"
  linkText: Leer más
  texto:
    - ¿Qué significa comprender la inteligencia artificial en un mundo donde el conocimiento, la tecnología y el poder están cada vez más entrelazados?
    - ¿Por qué Caliban? 
    - Panorama General de la IA
    - Uso de la IA en la Universidad
    - "Ejercicio práctico: Creación y auditoría de documentos"
---

<a class="manifiesto" href="./acerca-de">

La **inteligencia artificial** es el resultado de procesos científicos, técnicos, económicos, culturales y políticos que podemos estudiar, cuestionar y reorientar. No es magia, fuerza inevitable, ni ámbito reservado a unos pocos entendidos.  Desmitificarla implica ir más allá del entusiasmo acrítico o el temor paralizante. Al examinar sus posibilidades y limitaciones, también debemos preguntarnos quiénes la desarrollan, con qué propósitos y a costa de qué saberes.

<span class="manifiesto__more">→ Conoce el taller...</span>

</a>


<JungleDivider />

## Lo último

<script setup>
import { data as encuentros } from './encuentros/encuentros.data.js'
import { data as textos } from './textos/textos.data.js'

const ultimoEncuentro = encuentros.find((e) => e.session)
const ultimoTexto = textos[0]
const latest = [
  ultimoEncuentro && {
    ...ultimoEncuentro,
    tag: ultimoEncuentro.date ? `Último encuentro · ${ultimoEncuentro.date}` : 'Último encuentro'
  },
  ultimoTexto && {
    ...ultimoTexto,
    tag: ultimoTexto.date ? `Último texto · ${ultimoTexto.date}` : 'Último texto'
  }
].filter(Boolean)
</script>

<IndexCards :items="latest" />

<JungleDivider />

## ¿Por qué Caliban?

<RetamarQuote />