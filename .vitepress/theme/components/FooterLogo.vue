<template>
  <div v-if="showLogo" class="footer-logo">
    <img
      class="footer-logo__img"
      :src="withBase('/media/upr-logo.png')"
      alt="Universidad de Pinar del Río “Hermanos Saíz Montes de Oca”"
      loading="lazy"
      decoding="async"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { useSidebar } from 'vitepress/theme'

const { theme, frontmatter } = useData()
const { hasSidebar } = useSidebar()

// Same visibility rule as VitePress' own footer (VPFooter).
const showLogo = computed(
  () => !!theme.value.footer && frontmatter.value.footer !== false && !hasSidebar.value
)
</script>
