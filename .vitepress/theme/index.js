import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import CalibanHero from './components/CalibanHero.vue'
import JungleDivider from './components/JungleDivider.vue'
import HomeExergo from './components/HomeExergo.vue'
import IndexCards from './components/IndexCards.vue'
import RetamarQuote from './components/RetamarQuote.vue'
import NextEncuentro from './components/NextEncuentro.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(HomeExergo),
      'home-features-before': () => h(NextEncuentro)
    })
  },
  enhanceApp({ app }) {
    app.component('CalibanHero', CalibanHero)
    app.component('JungleDivider', JungleDivider)
    app.component('IndexCards', IndexCards)
    app.component('RetamarQuote', RetamarQuote)
    app.component('NextEncuentro', NextEncuentro)
  }
}
