<template>
  <div class="neon-grid">
    <a
      v-for="item in items"
      :key="item.href"
      class="neon-card"
      :href="withBase(item.href)"
    >
      <img :src="withBase(item.image)" :alt="item.imageAlt" loading="lazy" />
      <div class="neon-card__body">
        <p class="neon-card__tag">{{ item.tag }}</p>
        <h3 class="neon-card__title">{{ item.title }}</h3>
        <p class="neon-card__desc">{{ item.desc }}</p>
        <p class="neon-card__meta">{{ item.meta }}</p>
      </div>
    </a>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'

defineProps({
  items: { type: Array, required: true }
})
</script>
