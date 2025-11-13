import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
export default defineNuxtPlugin((nuxtApp) => {
  // Register plugins
  gsap.registerPlugin(ScrollTrigger, Draggable);

  // Provide globally
  nuxtApp.provide('gsap', gsap);
  nuxtApp.provide('scrollTrigger', ScrollTrigger);
  nuxtApp.provide('splitText', SplitText);
  nuxtApp.provide('draggable', Draggable);
});
