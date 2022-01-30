export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "mortenglad",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],
  // style resources
  styleResources: {
    scss: [
      "~/assets/scss/settings/vars.scss",
      "~/assets/scss/tools/mixins.scss",
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: "~/components", extensions: ["vue"] }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/google-fonts",
    "nuxt-graphql-request",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxtjs/svg",
  ],
  robots: {
    UserAgent: "*",
    Disallow: process.env.ROBOTS === "false" ? "/" : "",
    sitemap: process.env.BASE_URL + "/sitemap.xml",
  },
  sitemap: {
    hostname: process.env.BASE_URL || "http://localhost:3000",
    // add trailing slash to final sitemap
    trailingSlash: true,
    priority: 1,
    path: "/sitemap.xml",
    gzip: true,
    generate: false,
  },
  // graphql
  // graphql: {
  // 	clients: {
  // 		default: {
  // 			endpoint: process.env.GRAPHQL_ENDPOINT,
  // 			options: {
  // 				headers: {
  // 					authorization:
  // 						"Bearer " +
  // 						(process.env.BASE_URL === "https://portfolio-preview-prod.netlify.app/"
  // 							? process.env.GRAPHQL_PREVIEW_TOKEN
  // 							: process.env.GRAPHQL_TOKEN),
  // 				},
  // 			},
  // 		},
  // 	},
  // },
  graphql: {
    clients: {
      default: {
        endpoint: process.env.GRAPHQL_ENDPOINT,
        options: {
          headers: {
            authorization: "Bearer " + process.env.GRAPHQL_TOKEN,
          },
        },
      },
    },
  },

  // Control ssr
  ssr: process.env.SERVER_RENDER === "true",
  purgeCSS: {
    // whitelist spicific classes
    whitelist: [],
    // whitelist spicific classes and all that contains that naming
    whitelistPatterns: [
      /__layout/,
      /__nuxt/,
      /is-inview/,
      /is/,
      /hooper/,
      /social-links__item/,
      /svg/,
      /g/,
      /path/,
      /rect/,
      /fade-out/,
    ],
  },
  // google fonts
  googleFonts: {
    families: {
      "Roboto+Mono": { wght: [100 + ".." + 700] },
    },
    display: "swap",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: false,
}
