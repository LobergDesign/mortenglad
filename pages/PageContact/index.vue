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
import { loadSplitCharEffect } from "~/utils/transitions";
import ioTransitions from "~/utils/transitionSetter";
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
  mounted() {
    const SplitText = this.$SplitText;
    const gsap = this.$gsap as NLib.IGsap;
    const target = document.querySelector(
      "[data-load-split-char-effect]"
    ) as HTMLElement;
    target && ioTransitions(gsap, SplitText).init();
    loadSplitCharEffect(target, gsap, SplitText).init();
    this.$nextTick(() => {
      ioTransitions(gsap, SplitText).action();
      target && loadSplitCharEffect(target, gsap, SplitText).action();
    });
  },
});
</script>
