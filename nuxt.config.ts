// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  modules: ["@nuxtjs/color-mode", "@nuxt/ui"],
  colorMode: {
    classSuffix: "",
  },
  devtools: { enabled: true }
})