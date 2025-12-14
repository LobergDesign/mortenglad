export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    'nuxt-icons',
    '@nuxtjs/google-fonts',
    'nuxt-graphql-request',
    '@nuxt/image',
    'nuxt-security',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  css: ['~/assets/scss/main.scss'],

  // images
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dzw0r5i7d/image/upload/',
    },
    // Responsive image breakpoints - generates different sizes for different screens
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
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
            authorization: 'Bearer ' + process.env.GRAPHQL_TOKEN,
          },
        },
      },
    },
  },

  // google fonts
  googleFonts: {
    families: {
      'Roboto+Mono': { wght: '100..700' },
    },
    display: 'swap',
  },

  // security
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': [
          "'self'",
          'data:',
          'https://res.cloudinary.com', // Cloudinary images
          'https://images.ctfassets.net', // Contentful assets
        ],
        'font-src': [
          "'self'",
          'https://fonts.gstatic.com', // Google Fonts
        ],
        'style-src': [
          "'self'",
          "'unsafe-inline'", // Needed for GSAP animations and dynamic styles
          'https://fonts.googleapis.com', // Google Fonts
        ],
        'script-src': [
          "'self'",
          "'unsafe-inline'", // Needed for GSAP and inline scripts
        ],
        'connect-src': [
          "'self'", // API calls to /api/contentful
        ],
      },
      strictTransportSecurity: {
        maxAge: 31536000, // 1 year
        includeSubdomains: true,
      },
    },
  },
});
