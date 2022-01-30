import { Commit } from "vuex"
import { query } from "~/queries/global"

export const state = (): NStates.IGlobalSettingsState => ({
  globalSettings: {} as NStates.IGlobalSettings,
})

export const mutations = {
  SET_GLOBALE_SETTINGS(
    state: NStates.IGlobalSettingsState,
    globalSettings: NStates.IGlobalSettings
  ) {
    state.globalSettings = globalSettings
    console.log("globalSettings", globalSettings)
  },
}

export const actions = {
  async fetchGlobalSettings({ commit }: { commit: Commit }) {
    try {
      // @ts-ignore
      const globalSettings = await this.$graphql.default.request(query)

      commit("SET_GLOBALE_SETTINGS", globalSettings)
    } catch (errors) {
      // eslint-disable-next-line no-console
      console.log("error from store", errors)
    }
  },
}
