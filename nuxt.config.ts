// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:[
    'assets/global.scss'
  ],
  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData:'@import "~/assets/_variables.scss";'
        }
      }
    }
  },
  modules:[
    // '@nuxtjs/tailwindcss'
  ]
})
