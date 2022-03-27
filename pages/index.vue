<template>
  <div class="overflow-hidden">
    <hero-large v-if="hero" :data="hero" />
    <h1>
      {{ appIsReady }}
    </h1>
    <lazy-intro v-if="intro" :data="intro" />
    <lazy-cv-collections
      v-if="cvCollection && cvCollection.cvListCollection"
      :data="cvCollection.cvListCollection.items"
      :link="cvLink"
    />
    <lazy-grid-handler
      v-if="data && data.dynamicBlockSectionCollection"
      :data="data.dynamicBlockSectionCollection"
    />
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import { query } from "~/queries/frontpage";
import { query as cvCollectionQuery } from "~/queries/cvCollections";
import ioTransitions from "~/utils/transitionSetter";
import { loadSplitCharEffect } from "~/utils/transitions";
import setHead from "~/config/head";
export default Vue.extend({
  name: "IndexPage",

  async asyncData({ $apiResource, error }: Context) {
    const response = await $apiResource.getData(query);
    const cvCollection = await $apiResource.getDataWithLimit(
      cvCollectionQuery,
      3
    );
    if (!response) {
      return error;
    } else {
      const data = response.page;
      const hero = {
        heroTitle: data.heroTitle,
        heroImages: data.heroImages,
        heroTitleExtension: data.heroTitleExtension,
      };
      const intro = {
        introTitle: data.introTitle,
        introBodytext: data.introBodytext,
        introLink: data.introLink,
        introLinkText: data.introLinkText,
      };
      const cvLink = {
        cvLink: data.cvCollectionsLink,
        cvLinkText: data.cvCollectionsLinkText,
      };
      return {
        data,
        hero,
        intro,
        cvLink,
        cvCollection: cvCollection.page || null,
        seo: data.seo,
      };
    }
  },
  data() {
    return {
      hero: null,
      intro: null,
      cvCollection: null,
      cvLink: null,
      data: ({} as NPage.IStandardPage) || {},
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
    // this will only trigger on route changes
    this.appIsReady && this.loadAnimation();
  },
  methods: {
    loadAnimation() {
      const SplitText = this.$SplitText;
      const gsap = this.$gsap as NLib.IGsap;
      const target = document.querySelector(
        "[data-load-split-char-effect]"
      ) as HTMLElement;
      this.$nextTick(() => {
        ioTransitions(gsap, SplitText).action();
        target && loadSplitCharEffect(target, gsap, SplitText).action();
      });
    },
  },
});
</script>
