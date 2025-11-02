export default defineNuxtPlugin((nuxtApp) => {
  const client = nuxtApp.$graphql;

  // handle preview
  const previewUrl = 'https://morten-glad-preview.netlify.app/';
  const setPreviewBool = !!(
    process.env.BASE_URL === previewUrl ||
    nuxtApp.$config.baseUrl === previewUrl
  );
  const isPreview = { isPreview: setPreviewBool };
  // get data from query
  const getData = async (query: string, preview: object = isPreview) => {
    try {
      const response = await client.default.request(query, preview);
      return response;
    } catch (error: any) {
      console.error('error from cms plugin', error);
    }
  };

  // get data from query
  const getDataWithLimit = async (
    query: string,
    limit: number | null = null
  ) => {
    const variables = { limit, isPreview: setPreviewBool };
    try {
      const response = await client.default.request(query, variables);
      return response;
    } catch (error: any) {
      console.error('error from cms plugin', error);
    }
  };
  return {
    provide: {
      getData,
      getDataWithLimit,
    },
  };
});
