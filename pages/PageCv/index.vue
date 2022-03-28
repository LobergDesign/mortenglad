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
      return isAppReady;
    },
  },
  watch: {
    appIsReady() {
      this.appIsReady && this.loadAnimation();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.appIsReady && this.loadAnimation();
    });
  },
  methods: {
    loadAnimation() {
      const SplitText = this.$SplitText;
      const gsap = this.$gsap as NLib.IGsap;
      ioTransitions(gsap, SplitText).action();
    },
  },
});
</script>
