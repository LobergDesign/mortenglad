import _Vue from "vue";

declare module "@nuxt/types" {
  export interface Context {
    $apiResource: {
      getData: (query: string) => Promise<any>;
      getDataWithLimit: (query: string, limit: number | null) => Promise<any>;
    };
  }
}
