<template>
  <div class="overflow-hidden">
    <div class="aaaaand-action" data-aaaaand-action></div>
    <span data-look-at-me-mom></span>
    <div data-warm-blanket>
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
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import { query } from "~/queries/contactpage";
import animations from "~/mixins/loadAnimations";
import setHead from "~/config/head";
export default Vue.extend({
  name: "ContactPage",
  mixins: [animations],
  async asyncData({ $apiResource, error }: Context) {
    const response = await $apiResource.getData(query);

    if (!response) {
      return error;
    } else {
      return {
        data: response.page,
        seo: response.page.seo,
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
  head(): any {
    return setHead(this.seo || null);
  },
});
</script>
