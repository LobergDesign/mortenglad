<template>
  <div class="overflow-hidden">
    <hero-large v-if="hero" :data="hero" />
    <lazy-intro v-if="intro" :data="intro" />
    <lazy-cv-collections
      v-if="cvCollection"
      :data="cvCollection.cvListCollection.items"
      :link="cvLink"
    />
    <!-- <pre>
      {{ data }}
    </pre> -->
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
export default Vue.extend({
  name: "IndexPage",

  async asyncData({ $apiResource, error }: Context) {
    const response = await $apiResource.getData(query);
    const cvCollection = await $apiResource.getData(cvCollectionQuery);
    if (!response) {
      return error;
    } else {
      const data = response.pageHome;
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
        cvCollection: cvCollection.pageCv || null,
      };
    }
  },
  data() {
    return {
      hero: null,
      intro: null,
      cvCollection: null,
      cvLink: null,
      data: null,
    };
  },
});
</script>
