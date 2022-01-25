import { query } from "~/queries/global"

export const state = () => ({
  menu: {},
})

export const mutations = {
  SET_MENU(state: any, menu: any) {
    state.menu = menu
  },
}

export const actions = {
  async fetchMenu({ commit }: any) {
    console.log("fetchmenu from store")
    try {
      const menu = await this.$graphql.default.request(query)
      console.log("menu", menu)
      commit("SET_MENU", menu)
    } catch (e) {
      console.log("error from store", e)
    }
  },
}
