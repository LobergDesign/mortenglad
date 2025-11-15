import { useDebounceFn } from '@vueuse/core';

export const useSmoothScroll = () => {
  const nuxtApp = useNuxtApp();
  const smoothScroll = nuxtApp.$smoothScroll as any;
  const scrollTop = useState('scrollTop', () => 0);

  let instance: any = null;

  const initSmoothScroll = () => {
    const container = document.querySelector('.smooth-container');
    if (!container || !smoothScroll) return;

    instance = smoothScroll.init(container, {
      continuousScrolling: true,
      renderByPixels: true,
      damping: 0.09,
      thumbMinSize: 20,
    });

    const updateScroll = useDebounceFn(({ offset }: any) => {
      scrollTop.value = offset.y;
    }, 10);

    instance.addListener(updateScroll);
  };

  const destroySmoothScroll = () => {
    if (instance) {
      instance.destroy();
      instance = null;
    }
  };

  return {
    scrollTop,
    initSmoothScroll,
    destroySmoothScroll,
  };
};
