// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [{ name: "description", content: "A demo of web app written on Nuxt 3" }],
      link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }]
    }
  }
})
