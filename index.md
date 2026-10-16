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
  lugar:  Centro de Recursos para el Aprendizaje y la Investigación - Sala de Ciencias Técnicas  - Edificio de Rectoría
  titulo: "Encuentro 001: La Jungla"
  link: "/encuentros/001-la-jungla"
  linkText: Leer más
  texto:
    - "1- Presentación de Caliban: ¿Por qué este taller?"
    - El concepto de Caliban, la reapropiación del lenguaje técnico y la filosofía de un espacio horizontal.

    - "2- Panorama actual de la IA:"
    - "Un mapa sin mitos: desde el aprendizaje automático y los grandes modelos de lenguaje (LLM) hasta los sistemas agénticos."
    - "De la brecha de percepción y las geopolíticas de la tecnología."
    - "3- La Universidad ante la IA:"
    - "Análisis del informe de la UNESCO sobre educación superior en América Latina y el Caribe: oportunidades, riesgos de la delegación cognitiva y la redefinición de la evaluación."

    - "4- Laboratorio Práctico:"
    - "De la generación automática a la auditoría de documentos: ejercicio guiado para exigir rigor, contexto local y juicio crítico a los modelos de lenguaje."

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