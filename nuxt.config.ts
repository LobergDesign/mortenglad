import { extendRoutes, generate } from "./config/router";
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
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000/",
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
  plugins: ["~/plugins/cms"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: "~/components", extensions: ["vue"] }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/google-fonts",
    "nuxt-purgecss",
    "nuxt-graphql-request",
    "@aceforth/nuxt-netlify",
    "nuxt-gsap-module",
    "@nuxt/image",
    "@nuxtjs/svg",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "@nuxtjs/sitemap", "@nuxtjs/robots"],
  robots: {
    UserAgent: "*",
    Disallow: process.env.ROBOTS === "false" ? "/" : "",
    sitemap: process.env.BASE_URL + "/sitemap.xml",
  },

  // router
  router: {
    trailingSlash: true,
    linkActiveClass: "is-active",
    extendRoutes: async (routes: any, resolve: (...param: string[]) => Vue) =>
      await extendRoutes(routes, resolve),
  },
  // generate
  generate: {
    fallback: true,
    exclude: [
      /PageCv/,
      /PageResume/,
      /PageHome/,
      /PageGallery/,
      /PageShowreels/,
      /PageContact/,
    ],
    crawler: false,
    routes: async () => await generate(),
  },
  purgeCSS: {
    // whitelist spicific classes
    whitelist: ["child"],
    // whitelist spicific classes and all that contains that naming
    whitelistPatterns: [
      /__layout/,
      /__nuxt/,
      /cls/,
      /is/,
      /img/,
      /strong/,
      /input/,
      /b/,
      /svg/,
      /path/,
      /rect/,
      /fade-out/,
      /ol/,
      /is/,
      /is-/,
      /keen/,
      /scroll-content/,
      /smooth-container/,
    ],
  },
  sitemap: {
    hostname: process.env.BASE_URL || "http://localhost:3000",
    exclude: [
      "/PageCv/",
      "/PageResume/",
      "/PageHome/",
      "/PageGallery/",
      "/PageShowreels/",
      "/PageContact/",
    ],
    // add trailing slash to final sitemap
    trailingSlash: true,
    priority: 1,
    path: "/sitemap.xml",
    gzip: true,
    generate: false,
  },
  // netlify
  netlify: {
    redirects: [
      {
        from: "https://morten-glad-prod.netlify.app/",
        to: "https://mortenglad.dk/",
        force: true,
      },
    ],
    headers: {
      "/*": ["Access-Control-Allow-Origin: *"],
      "/favicon.ico": ["Cache-Control: public, max-age=86400"],
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
              "Bearer " +
              (process.env.BASE_URL ===
              "https://morten-glad-preview.netlify.app/"
                ? process.env.GRAPHQL_PREVIEW_TOKEN
                : process.env.GRAPHQL_TOKEN),
          },
        },
      },
    },
  },
  // GSAP
  gsap: {
    clubPlugins: {
      splitText: true,
    },
  },
  // images
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dzw0r5i7d/image/fetch/",
    },
  },

  // Control ssr
  ssr: process.env.SERVER_RENDER === "true",
  loaders: {
    ts: {
      silent: true,
    },
  },

  pageTransition: {
    css: false,
    leave(el: HTMLElement, done: Function) {
      const gsap = this.$gsap as NLib.IGsap;
      const contentWrap = el.querySelector(".smooth-container");
      const polygonElm = el.querySelector("[data-aaaaand-action]");

      gsap.to(contentWrap, {
        y: -300,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });

      gsap.timeline().fromTo(
        polygonElm,
        {
          visibility: "visible",
          yPercent: 100,
          backgroundColor: "#151515",
          clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)",
        },
        {
          clipPath: "polygon(0 0%, 100% 0, 100% 100%, 0 100%)",
          yPercent: 0,
          backgroundColor: "#e9f1f7",
          duration: 1.1,
          ease: "power4.inOut",
          onComplete: () => done(),
        }
      );
    },
    beforeEnter(el: HTMLElement) {
      const polygonElm = el.querySelector("[data-aaaaand-action]");
      const gsap = this.$gsap as NLib.IGsap;
      gsap.set(polygonElm, {
        visibility: "visible",
        duration: 0,
        ease: "none",
        clipPath: "polygon(0 0%, 100% 0, 100% 100%, 0 100%)",
      });
    },
    enter(el: HTMLElement, done: Function) {
      const gsap = this.$gsap as NLib.IGsap;
      const contentWrap = el.querySelector("[data-warm-blanket]");
      const polygonElm = el.querySelector("[data-aaaaand-action]");
      gsap.to(polygonElm, {
        yPercent: -100,
        duration: 1.05,
        ease: "power4.inOut",
        clipPath: "polygon(0 0%, 100% 0, 100% 100%, 0 90%)",
        clearProps: true,
      });
      gsap.fromTo(
        contentWrap,
        { y: 250 },
        {
          y: 0,
          duration: 1,
          ease: "power4.inOut",
          clearProps: true,
          onComplete: () => done(),
        }
      );
    },
  },

  // google fonts
  googleFonts: {
    families: {
      "Roboto+Mono": { wght: [100 + ".." + 700] },
    },
    display: "swap",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"],
  },
  loading: false,
};
