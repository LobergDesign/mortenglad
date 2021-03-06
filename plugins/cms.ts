import { Context, Inject } from "@nuxt/types/app";

export default function (ctx: Context, inject: Inject) {
  const client = ctx.app.$graphql;

  // handle preview
  const previewUrl = "https://morten-glad-preview.netlify.app/";
  const setPreviewBool = !!(
    process.env.BASE_URL === previewUrl ||
    ctx.app.$config.baseUrl === previewUrl
  );
  const isPreview = { isPreview: setPreviewBool };
  // get data from query
  const getData = async (query: string, preview: object = isPreview) => {
    try {
      const response = await client.default.request(query, preview);
      return response;
    } catch (error: any) {
      console.log("error from cms plugin", error);
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
      console.log("error from cms plugin", error);
    }
  };

  // Inject in Nuxt Context
  inject("apiResource", {
    getData,
    getDataWithLimit,
  });
}
