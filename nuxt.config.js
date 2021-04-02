export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fruit bowl -> BTC',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Turn a fruit cup into a bitcoin??!!!' },
      { hid: 'og:title', property: 'og:title', content: 'fruit cup to bitcoin' },
      { hid: 'og:description', property: 'og:description', content: 'Turn a fruit cup into a bitcoin??!!!' },
      { hid: 'og:author', property: 'og:author', content: 'bfu4' },
      { name: 'theme-color', content: '#f9cd0b' },
      { name: 'twitter:card', content: 'summary' },
      { hid: 'og:image', property: 'og:image', content: '/cup.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/cup.png' },
      { rel: '', type: 'font', href: '/FSEX300.ttf' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'static/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/fontAwesomePlugin.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
