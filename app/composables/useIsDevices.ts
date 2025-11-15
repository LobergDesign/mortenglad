import { useWindowSize } from '@vueuse/core';
export const useIsDevices = () => {
  const { width } = useWindowSize();

  const isDevices = computed(() => width.value <= 1025);
  return {
    isDevices,
  };
};
