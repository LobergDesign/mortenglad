import { GraphQLClient } from "graphql-request";
import { query } from "../queries/global";

const siteStructure = async () => {
  const endpoint = process.env.GRAPHQL_ENDPOINT as string;
  const previewUrl = "https://morten-glad-preview.netlify.app";
  const token =
    process.env.BASE_URL === previewUrl
      ? process.env.GRAPHQL_PREVIEW_TOKEN
      : process.env.GRAPHQL_TOKEN;
  const setPreviewBool = process.env.BASE_URL === previewUrl;
  const isPreview = { isPreview: setPreviewBool };
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: "Bearer " + token,
    },
  });

  const data = await graphQLClient.request(query, isPreview);
  const menuItems = data.globalSettings.mainMenuCollection.items;

  return {
    menuItems,
  };
};

export async function extendRoutes(
  routes: any[],
  resolve: (...param: string[]) => Vue
) {
  const menu = await siteStructure();

  const sitemapRoutes: NGlobal.IRouteItems[] = [];

  menu.menuItems.forEach((route: any) => {
    if (route.pageType === "PageHome") {
      sitemapRoutes.push({
        path: "",
        component: resolve(`~/pages/index.vue`),
        name: route.slug,
      });
    } else {
      sitemapRoutes.push({
        path: `/${route.slug}/`,
        component: resolve(`~/pages/${route.pageType}/index.vue`),
        name: route.slug,
      });
    }
  });

  return [...routes, ...sitemapRoutes];
}

export async function generate() {
  const menu = await siteStructure();
  const routes: NGlobal.IRouteItems[] = [];

  menu.menuItems.forEach((item: any) => {
    if (item.slug !== "/") {
      routes.push({
        route: `/${item.slug}/`,
      });
    }
  });
  return routes;
}
