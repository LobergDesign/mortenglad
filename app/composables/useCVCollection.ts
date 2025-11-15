import { query as cvCollectionQuery } from '~/queries/cvCollections';

export const useCVCollection = async (limit: number | null = 3) => {
  const { $getDataWithLimit } = useNuxtApp();

  const { data, status, pending, error } = await useAsyncData(
    'cv-collection',
    () => $getDataWithLimit(cvCollectionQuery, limit)
  );

  // ✅ GraphQL or network errors are stored reactively in `error.value`
  if (error.value) {
    const err = error.value as any;

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
