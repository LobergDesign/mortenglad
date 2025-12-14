export default defineNuxtPlugin((_nuxtApp) => {
  // get data from query via server API route
  const getData = async (query: string) => {
    try {
      const response = await $fetch('/api/contentful', {
        method: 'POST',
        body: {
          query,
        },
      });
      return response;
    } catch (error: any) {
      console.error('getData error from cms plugin', error);
      throw error;
    }
  };

  // get data from query with limit
  const getDataWithLimit = async (
    query: string,
    limit: number | null = null,
  ) => {
    const variables = { limit };
    try {
      const response = await $fetch('/api/contentful', {
        method: 'POST',
        body: {
          query,
          variables,
        },
      });
      return response;
    } catch (error: any) {
      console.error('getDataWithLimit error from cms plugin', error);
      throw error;
    }
  };

  return {
    provide: {
      getData,
      getDataWithLimit,
    },
  };
});
