// plugins/gsap.client.ts
import { defineNuxtPlugin } from '#app';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
// import other GSAP plugins you plan to use e.g. Flip, ScrollSmoother etc

// Note: if certain plugins require separate import paths adjust accordingly.

export default defineNuxtPlugin((nuxtApp) => {
  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Provide globally
  nuxtApp.provide('gsap', gsap);
  nuxtApp.provide('scrollTrigger', ScrollTrigger);
  nuxtApp.provide('splitText', SplitText);

  return {
    // Optionally you could attach to nuxtApp.vueApp.config.globalProperties
  };
});
