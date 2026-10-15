import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'es-ES',
  title: 'Bitácora de Caliban',
  description: 'Taller abierto de inteligencia artificial y sociedad',
  // Base para GitHub Pages: https://malayibiri.github.io/caliban
  // En desarrollo local se puede sobreescribir con `vitepress dev --base=/`
  base: '/caliban/',
  srcDir: '.',
  outDir: './.vitepress/dist',
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#07100d' }],
    ['meta', { name: 'description', content: 'Caliban — Taller abierto de inteligencia artificial y sociedad. Encuentros, textos y bitácora crítica sobre IA, tecnología y sociedad.' }],
    ['meta', { property: 'og:title', content: 'Caliban — Taller abierto de inteligencia artificial y sociedad' }],
    ['meta', { property: 'og:description', content: 'Fusión cyber-jungla: IA, arte, cuerpo y territorio. Encuentros y textos.' }],
    ['meta', { property: 'og:image', content: 'https://malayibiri.github.io/caliban/media/02-banner-horizontal.jpeg' }],
    ['meta', { property: 'og:locale', content: 'es_ES' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%2307100d'/%3E%3Ctext x='16' y='23' font-family='monospace' font-size='19' font-weight='bold' text-anchor='middle' fill='%2300ff9d'%3EC%3C/text%3E%3C/svg%3E" }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,900;1,9..144,400&family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap'
    }]
  ],

  markdown: {
    image: { lazyLoading: true },
    container: {
      tipLabel: 'Consejo',
      warningLabel: 'Aviso',
      dangerLabel: 'Atención',
      infoLabel: 'Nota'
    }
  },

  themeConfig: {
    siteTitle: 'Bitácora de Caliban',
    logoLink: '/',
    darkModeSwitchLabel: 'Apariencia',
    lightModeSwitchTitle: 'Cambiar a modo claro',
    darkModeSwitchTitle: 'Cambiar a modo oscuro',
    sidebarMenuLabel: 'Menú',
    returnToTopLabel: 'Volver arriba',
    langMenuLabel: 'Idioma',
    outline: { label: 'En esta página', level: [2, 3] },
    docFooter: { prev: 'Anterior', next: 'Siguiente' },
    lastUpdated: { text: 'Actualizado el' },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
              modal: {
                displayDetails: 'Mostrar detalles',
                resetButtonTitle: 'Limpiar búsqueda',
                backButtonTitle: 'Cerrar búsqueda',
                noResultsText: 'Sin resultados para',
                footer: { selectText: 'seleccionar', navigateText: 'navegar', closeText: 'cerrar' }
              }
            }
          }
        }
      }
    },

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Encuentros', link: '/encuentros/', activeMatch: '/encuentros/' },
      { text: 'Textos', link: '/textos/', activeMatch: '/textos/' },
      { text: 'Acerca de', link: '/acerca-de', activeMatch: '/acerca-de' }
    ],

    sidebar: {
      '/encuentros/': [
        {
          text: 'Encuentros',
          items: [
            { text: 'Bitácora de encuentros', link: '/encuentros/' },
            { text: '001 · Germinar en la jungla', link: '/encuentros/001-germinar-en-la-jungla' },
            { text: 'Cómo documentar un encuentro', link: '/encuentros/como-documentar' }
          ]
        }
      ],
      '/textos/': [
        {
          text: 'Textos',
          items: [
            { text: 'Todos los textos', link: '/textos/' },
            { text: 'Manifiesto Caliban', link: '/textos/manifiesto-caliban' },
            { text: 'IA, cuerpo y territorio', link: '/textos/ia-cuerpo-territorio' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/malayibiri/caliban' }
    ],

    footer: {
      message: 'Taller abierto · IA y sociedad · Hecho con maleza, cables y neón.',
      copyright: '© 2026 Caliban — Contenido abierto para remezclar con atribución.'
    }
  },

  vite: {
    server: { fs: { allow: ['..'] } }
  }
})
