export default defineNuxtPlugin((nuxtApp) => {
  // handle preview
  const previewUrl = 'https://morten-glad-preview.netlify.app/';
  const setPreviewBool = !!(
    process.env.BASE_URL === previewUrl ||
    nuxtApp.$config.public.baseUrl === previewUrl
  );

  // get data from query via server API route
  const getData = async (query: string, preview: object = { isPreview: setPreviewBool }) => {
    try {
      const response = await $fetch('/api/contentful', {
        method: 'POST',
        body: {
          query,
          variables: preview,
        },
      });
      return response;
    } catch (error: any) {
      console.error('error from cms plugin', error);
      throw error;
    }
  };

  // get data from query with limit
  const getDataWithLimit = async (
    query: string,
    limit: number | null = null
  ) => {
    const variables = { limit, isPreview: setPreviewBool };
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
      console.error('error from cms plugin', error);
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
