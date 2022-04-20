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
    beforeLeave(el: any) {
      console.log(" beforeLeave", el);
      // set chars

      const routeTitle = document.querySelector(
        "[data-look-at-me-mom]"
      ) as HTMLDivElement;
      routeTitle.innerHTML = this.$route.name;
    },
    leave(el: any, done: any) {
      const gsap = this.$gsap as NLib.IGsap;
      const SplitText = this.$SplitText;
      const routeChars = el.querySelector("[data-look-at-me-mom]");
      // anitmate chars
      const tl = gsap.timeline();
      gsap.to(routeChars, { autoAlpha: 1, duration: 0 });
      // @ts-ignore
      const mySplitText = new SplitText(routeChars, { type: "chars" });
      const chars = mySplitText.chars;

      tl.fromTo(
        chars,
        { opacity: 0, x: -190, fontWeight: 100 },
        {
          fontWeight: 400,
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: -0.05,
          ease: "power4.inOut",
        }
      )
        .to(chars, {
          fontWeight: 100,
          x: 50,
          opacity: 0,
          duration: 1,
          stagger: -0.05,
          ease: "power4.out",
        })
        .to(chars, {
          opacity: 0,
          duration: 0,
          delay: -0.89,
          onComplete: () => done(),
        });

      console.log(" leave", el);

      const newEl = el.querySelector("[data-warm-blanket]");
      const elChild = el.querySelector("[data-aaaaand-action]");

      gsap.to(newEl, {
        y: -350,
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
      });

      gsap.timeline().fromTo(
        elChild,
        { visibility: "visible", yPercent: 100, backgroundColor: "#151515" },
        {
          yPercent: 0,
          backgroundColor: "#e9f1f7",
          duration: 1,
          ease: "power4.inOut",
        }
      );
    },
    beforeEnter(el: any) {
      console.log("beforeEnter", el);
      const elChild = el.querySelector("[data-aaaaand-action]");
      const gsap = this.$gsap as NLib.IGsap;
      gsap.set(elChild, {
        visibility: "visible",
        duration: 0,
        ease: "none",
      });
    },
    enter(el: any, done: any) {
      console.log("page enter", el);
      const gsap = this.$gsap as NLib.IGsap;
      const newEl = el.querySelector("[data-warm-blanket]");
      const elChild = el.querySelector("[data-aaaaand-action]");
      gsap.to(elChild, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      });
      gsap.fromTo(
        newEl,
        { y: 250, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.inOut",
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
