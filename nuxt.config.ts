// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["vuetify-nuxt-module", "@vite-pwa/nuxt"],
  css: ["~/styles/heart.css"],

  
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});