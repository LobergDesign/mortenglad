import {
  GetCvCollectionsDocument,
  type GetCvCollectionsQuery,
} from '~/generated/graphql';

export const useCVCollection = async (limit: number | null = 3) => {
  const { $getDataWithLimit } = useNuxtApp();

  const { data, error } = await useAsyncData<GetCvCollectionsQuery>(
    'cv-collection',
    () =>
      $getDataWithLimit(GetCvCollectionsDocument, {
        id: CONTENT_IDS.CV_PAGE,
        limit,
      }),
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

  return { data };
};
