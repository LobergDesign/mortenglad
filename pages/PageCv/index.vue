<template>
  <div v-if="data">
    <hero
      v-if="data.hero"
      :title="data.hero.title"
      :bodytext="data.hero.bodytext"
    />
    <lazy-accordion
      v-if="cvCollection"
      :data="cvCollection.cvListCollection.items"
    />
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import { query } from "~/queries/cvpage";
import { query as cvCollectionQuery } from "~/queries/cvCollections";
import ioTransitions from "~/utils/transitionSetter";
import { loadSplitCharEffect } from "~/utils/transitions";
import setHead from "~/config/head";
export default Vue.extend({
  name: "CvPage",

  async asyncData({ $apiResource, error }: Context) {
    const response = await $apiResource.getData(query);
    const cvCollection = await $apiResource.getDataWithLimit(
      cvCollectionQuery,
      null
    );
    if (!response) {
      return error;
    } else {
      const data = response.page;
      return {
        data,
        cvCollection: cvCollection.page || null,
        seo: data.seo,
      };
    }
  },
  data() {
    return {
      data: ({} as NPage.IStandardPage) || {},
      cvCollection: null,
    };
  },
  head(): any {
    return setHead(this.seo || null);
  },
  computed: {
    appIsReady() {
      const isAppReady = this.$store.state.global.isApplicationReady;
      console.log("computed", isAppReady);
      return isAppReady;
    },
  },
  watch: {
    appIsReady() {
      this.$nextTick(() => {
        console.log("watchaaa", this.appIsReady);
        this.appIsReady && this.loadAnimation();
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      // this will only trigger on route changes
      console.log("mounted", this.appIsReady);
      this.appIsReady && this.loadAnimation();
    });
  },
  methods: {
    loadAnimation() {
      this.$nextTick(() => {
        const SplitText = this.$SplitText;
        const gsap = this.$gsap as NLib.IGsap;
        const target = document.querySelector(
          "[data-load-split-char-effect]"
        ) as HTMLElement;
        console.log("SplitText", SplitText);
        console.log("gsap", gsap);
        console.log("target", target);
        ioTransitions(gsap, SplitText).action();
        target && loadSplitCharEffect(target, gsap, SplitText).action();
      });
    },
  },
});
</script>
