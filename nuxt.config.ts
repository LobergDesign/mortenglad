export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    'nuxt-icons',
    '@nuxtjs/google-fonts',
    'nuxt-graphql-request',
    '@nuxt/image',
  ],
  css: ['~/assets/scss/main.scss'],

  // images
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dzw0r5i7d/image/fetch/',
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/settings/vars.scss" as *;
            @use "@/assets/scss/tools/mixins.scss" as *;
          `,
        },
      },
    },
  },
  runtimeConfig: {
    // Server-side only (never exposed to client)
    graphqlEndpoint: process.env.GRAPHQL_ENDPOINT,
    graphqlToken: process.env.GRAPHQL_TOKEN,
    graphqlPreviewToken: process.env.GRAPHQL_PREVIEW_TOKEN,
    // Client-side accessible
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000/',
    },
  },

  app: {
    head: {
      title: 'mortenglad',
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  // graphql
  graphql: {
    clients: {
      default: {
        endpoint: process.env.GRAPHQL_ENDPOINT,
        options: {
          headers: {
            authorization:
              'Bearer ' +
              (process.env.BASE_URL ===
              'https://morten-glad-preview.netlify.app/'
                ? process.env.GRAPHQL_PREVIEW_TOKEN
                : process.env.GRAPHQL_TOKEN),
          },
        },
      },
    },
  },

  build: {
    transpile: ['nuxt-graphql-request', 'gsap'],
  },
  // google fonts
  googleFonts: {
    families: {
      'Roboto+Mono': { wght: '100..700' },
    },
    display: 'swap',
  },
});
