<template>
  <div v-if="data">
    <hero
      v-if="data.hero"
      :title="data.hero.title"
      :bodytext="data.hero.bodytext"
    />
    <contact-section :data="global" />
    <lazy-grid-handler
      v-if="data.dynamicBlockSectionCollection"
      :data="data.dynamicBlockSectionCollection"
    />
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import { query } from "~/queries/contactpage";

export default Vue.extend({
  name: "ContactPage",

  async asyncData({ $apiResource, error }: Context) {
    const response = await $apiResource.getData(query);

    if (!response) {
      return error;
    } else {
      return {
        data: response.page,
      };
    }
  },

  data() {
    return {
      data: ({} as NPage.IStandardPage) || {},
      global: ({} as NGlobalData.IGlobalData) || {},
    };
  },
  fetch() {
    const globalData = this.$store.state.global.globalSettings;
    if (globalData) this.global = globalData.globalSettings;
  },
});
</script>
