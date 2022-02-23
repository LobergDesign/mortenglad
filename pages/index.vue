<template>
  <div class="overflow-hidden">
    <hero-large v-if="hero" :data="hero" />
    <lazy-intro v-if="intro" :data="intro" />
    <lazy-cv-collections
      v-if="cvCollection"
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
import test from "~/utils/transitionSetter";
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
  mounted() {
    const SplitText = this.$SplitText;
    // @ts-ignore
    const gsap = this.$gsap as NLib.IGsap;
    test(gsap, SplitText);
    // const targets = document.querySelectorAll("[data-test-target]");
    // console.log("targets", targets);
  },
});
</script>
