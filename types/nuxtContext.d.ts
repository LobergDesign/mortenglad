import _Vue from "vue"

declare module "@nuxt/types" {
  export interface Context {
    $apiResource: {
      getData: (arg: any) => Promise<any>
      getDynamicData: (arg: any, args: string) => Promise<any>
    }
  }
}
