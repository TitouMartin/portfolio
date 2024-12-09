// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/")
  },
  css: ["~/assets/style/_main.scss", "~/assets/style/_global-styling.scss", "~/assets/style/_landing-page.scss", "~/assets/style/_project-page.scss",],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/style/_variables.scss" as *;',
          api: 'modern',
        },
      },
    },
  },
})
