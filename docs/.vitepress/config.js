import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  /**
   * Main language
   * TODO: Add support for multiple languages
   */
  lang: 'es-MX',
  /**
   * Base URL for the site, this is for gitpages
   */
  base: '/mexpost/',

  title: 'Mexpost | Open México',
  titleTemplate: '- Mexpost | Open México',
  description: 'Base de datos de códigos postales de México',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Introducción',
        items: [
          { text: '¿Qué es Mexpost?', link: '/what-is-mexpost' },
          { text: 'Primeros pasos', link: '/getting-started' }
        ]
      },
      {
        text: 'Busquedas',
        items: [
          { text: 'Códigos Postales', link: '/codigos-postales' },
          { text: 'Colonias', link: '/colonias' },
          { text: 'Municipio', link: '/municipios' },
          { text: 'Por coordenadas', link: '/coordenadas' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/open-mexico/mexpost' }
    ]
  }
})
