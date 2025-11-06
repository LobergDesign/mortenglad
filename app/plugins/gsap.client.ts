import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
export default defineNuxtPlugin((nuxtApp) => {
  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Provide globally
  nuxtApp.provide('gsap', gsap);
  nuxtApp.provide('scrollTrigger', ScrollTrigger);
  nuxtApp.provide('splitText', SplitText);
});
