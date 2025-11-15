import { query } from '~/queries/contactpage';
export const useContactPage = async () => {
  const { $getData } = useNuxtApp();

  const { data, status, pending, error } = await useAsyncData(
    'contact-page',
    () => $getData(query)
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
