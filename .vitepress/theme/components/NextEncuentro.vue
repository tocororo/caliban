<template>
  <div v-if="proximo" class="next-encuentro">
    <p class="next-encuentro__kicker">&#9672; Pr&oacute;ximo encuentro</p>
    <h2 class="next-encuentro__title">{{ proximo.titulo }}</h2>
    <p class="next-encuentro__meta">
      <span>&#128197; {{ proximo.fecha }}</span>
      <span>&#128205; {{ proximo.lugar }}</span>
    </p>
    <p v-for="(p, i) in proximo.texto" :key="i" class="next-encuentro__text">{{ p }}</p>
    <a class="btn-neon" :href="withBase('/encuentros/')">Ver la bit&aacute;cora</a>
  </div>
</template>

<script setup>
import { useData, withBase } from 'vitepress'

const { frontmatter } = useData()
const proximo = frontmatter.value.proximo
</script>
