export const useGsap = () => {
  const nuxtApp = useNuxtApp();
  const gsap = nuxtApp.$gsap as typeof import('gsap').gsap;
  const scrollTrigger =
    nuxtApp.$scrollTrigger as typeof import('gsap/ScrollTrigger').ScrollTrigger;
  const splitText =
    nuxtApp.$splitText as typeof import('gsap/SplitText').SplitText;
  const draggable =
    nuxtApp.$draggable as typeof import('gsap/Draggable').Draggable;

  return { gsap, scrollTrigger, splitText, draggable };
};
