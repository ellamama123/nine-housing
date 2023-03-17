// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {},
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/image-edge'],
  devServerHandlers: [],
})
