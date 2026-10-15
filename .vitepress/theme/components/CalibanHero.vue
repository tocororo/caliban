<template>
  <div class="caliban-hero">
    <img
      class="caliban-hero__bg"
      :src="withBase('/media/02-banner-horizontal.jpeg')"
      alt="Jungla cyberpunk con figuras biomecánicas y neones"
      loading="eager"
    />
    <div class="caliban-hero__veil" aria-hidden="true" />
    <div class="caliban-hero__body">
      <p class="caliban-kicker">{{ kicker }}</p>
      <h1 class="caliban-title" v-html="titleHtml" />
      <p class="caliban-sub">{{ subtitle }}</p>
      <div class="caliban-cta">
        <a class="btn-neon" :href="withBase(primaryHref)">{{ primaryText }}</a>
        <a class="btn-ghost" :href="withBase(secondaryHref)">{{ secondaryText }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'

defineProps({
  kicker: { type: String, default: '// taller_abierto — IA + sociedad' },
  titleHtml: { type: String, default: 'Cali<em>ban</em>' },
  subtitle: { type: String, default: 'Taller abierto de inteligencia artificial y sociedad' },
  primaryText: { type: String, default: '↳ Entrar a los encuentros' },
  primaryHref: { type: String, default: '/encuentros/' },
  secondaryText: { type: String, default: 'Leer los textos' },
  secondaryHref: { type: String, default: '/textos/' }
})
</script>
