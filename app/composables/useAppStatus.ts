export const useAppStatus = () => {
  const isApplicationReady = useState<boolean>(
    'isApplicationReady',
    () => false,
  );

  const initApplication = () => {
    isApplicationReady.value = true;
  };

  return {
    isApplicationReady,
    initApplication,
  };
};
