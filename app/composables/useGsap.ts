export const useGsap = () => {
  const nuxtApp = useNuxtApp();
  const gsap = nuxtApp.$gsap as typeof import('gsap').gsap;
  const ScrollTrigger =
    nuxtApp.$ScrollTrigger as typeof import('gsap/ScrollTrigger').ScrollTrigger;
  return { gsap, ScrollTrigger };
};
