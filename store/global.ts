import { Commit } from "vuex";
import { query } from "~/queries/global";

export const state = (): NStates.IGlobalSettingsState => ({
  globalSettings: {} as NStates.IGlobalSettings,
  isApplicationReady: false,
});

export const mutations = {
  setGlobalSettings(
    state: NStates.IGlobalSettingsState,
    globalSettings: NStates.IGlobalSettings
  ) {
    state.globalSettings = globalSettings;
  },
  initApplication(state: NStates.IGlobalSettingsState) {
    state.isApplicationReady = true;
  },
};

export const actions = {
  async fetchGlobalSettings({ commit }: { commit: Commit }) {
    try {
      // @ts-ignore
      const globalSettings = await this.$graphql.default.request(query);
      commit("setGlobalSettings", globalSettings);
    } catch (errors) {
      // eslint-disable-next-line no-console
      console.log("error from store", errors);
    }
  },
};
