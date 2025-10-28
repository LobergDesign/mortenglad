// plugins/gsap.client.ts
import { defineNuxtPlugin } from '#app';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import other GSAP plugins you plan to use e.g. Flip, ScrollSmoother etc

// Note: if certain plugins require separate import paths adjust accordingly.

export default defineNuxtPlugin((nuxtApp) => {
  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Provide globally
  nuxtApp.provide('gsap', gsap);
  nuxtApp.provide('ScrollTrigger', ScrollTrigger);

  return {
    // Optionally you could attach to nuxtApp.vueApp.config.globalProperties
  };
});
