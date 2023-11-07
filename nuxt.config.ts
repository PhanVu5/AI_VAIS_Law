import eslintPlugin from "vite-plugin-eslint";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  // modules: [
  //   'nuxt-socket-io',
  //   './modules/socket'
  // ],
  ignorePrefix: "-",
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    }
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    "~/assets/main.scss",
    "~/assets/main.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
})
