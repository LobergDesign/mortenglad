import {
  GetGlobalSettingsDocument,
  type GetGlobalSettingsQuery,
} from '~/generated/graphql';

export const useGlobaleSettings = async () => {
  const { $getData } = useNuxtApp();

  const { data, pending, error } = await useAsyncData<GetGlobalSettingsQuery>(
    'global-settings',
    () =>
      $getData(GetGlobalSettingsDocument, { id: CONTENT_IDS.GLOBAL_SETTINGS }),
  );

  // ✅ GraphQL or network errors are stored reactively in `error.value`
  if (error.value) {
    const err = error.value as any;

    if (err.networkError) {
      console.error('[Network error]', err.networkError);
    } else if (err.graphQLErrors?.length) {
      console.error('[GraphQL error]', err.graphQLErrors);
    } else {
      console.error('[Unknown gql error]', err);
    }
  }

  return { data, pending };
};
