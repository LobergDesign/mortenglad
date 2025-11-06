export const useSmoothScroll = () => {
  const nuxtApp = useNuxtApp();
  const smoothScroll = nuxtApp.$smoothScroll;

  return { smoothScroll };
};
