import Scrollbar from 'smooth-scrollbar';

export default defineNuxtPlugin((nuxtApp) => {
  // Provide globally
  nuxtApp.provide('smoothScroll', Scrollbar);
});
