// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: "it's just good marketing",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Practical marketing automation for local businesses that delivers real results' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/vite.svg' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true
  }
})