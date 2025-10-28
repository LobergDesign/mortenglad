import { query } from '~/queries/global';
export const useGlobaleSettings = async () => {
  const { $getData } = useNuxtApp();
  // const globalSettings = ref<NStates.IGlobalSettings>(
  //   {} as NStates.IGlobalSettings
  // );

  const { data, status, pending, error } =
    await useAsyncData<NStates.IGlobalSettingsState>('global-settings', () =>
      $getData(query)
    );

  // ✅ GraphQL or network errors are stored reactively in `error.value`
  if (error.value) {
    const err = error.value;

    if (err.networkError) {
      console.error('[Network error]', err.networkError);
    } else if (err.graphQLErrors?.length) {
      console.error('[GraphQL error]', err.graphQLErrors);
    } else {
      console.error('[Unknown gql errosssr]', err);
    }
  }

  return { data, error, status, pending };
};
