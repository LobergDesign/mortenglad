export default defineNuxtPlugin((_nuxtApp) => {
  // get data from query via server API route
  const getData = async <TResult = any, TVariables = any>(
    document: any,
    variables?: TVariables,
  ) => {
    try {
      const response = await $fetch('/api/contentful', {
        method: 'POST',
        body: {
          document,
          variables,
        },
      });
      return response as TResult;
    } catch (error: any) {
      console.error('getData error from cms plugin', error);
      throw error;
    }
  };

  // get data from query with limit
  const getDataWithLimit = async <TResult = any, TVariables = any>(
    document: any,
    variables: TVariables,
  ) => {
    try {
      const response = await $fetch('/api/contentful', {
        method: 'POST',
        body: {
          document,
          variables,
        },
      });
      return response as TResult;
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
