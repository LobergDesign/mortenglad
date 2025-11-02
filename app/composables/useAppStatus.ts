export const useAppStatus = () => {
  const isApplicationReady = ref(false);

  const initApplication = () => {
    isApplicationReady.value = true;
  };

  return {
    isApplicationReady,
    initApplication,
  };
};
