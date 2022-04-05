<template>
  <div class="overflow-hidden warm-blanket">
    <hero-large v-if="hero" :data="hero" />
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
import setHead from "~/config/head";
import animations from "~/mixins/loadAnimations";
export default Vue.extend({
  name: "IndexPage",
  mixins: [animations],
  transition: {
    css: false,
    leave(el, done) {
      console.log("frontpage page leave", el);
      done();
    },
    beforeLeave(el) {
      console.log("frontpage page beforeLeave", el);
    },
    afterLeave(el) {
      console.log("frontpage page afterLeave", el);
    },

    beforeEnter(el) {
      console.log("frontpage page beforeEnter", el);
    },
    enter(el, done) {
      console.log("frontpage page enter", el);
      const gsap = this.$gsap as NLib.IGsap;
      const tl = gsap.timeline();
      tl.fromTo(
        el,
        { yPercent: 100, opacity: 0, autoAlpha: 1 },
        {
          yPercent: 0,
          opacity: 1,
          autoAlpha: 1,
          duration: 3,
          ease: "power4.out",
          onComplete: () => done(),
        }
      );
    },
    afterEnter(el) {
      console.log("frontpage page afterEnter", el);
    },
  },
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
      cvCollection: ({} as NCVCollection.ICVItems) || {},
      cvLink: null,
      data: ({} as NPage.IStandardPage) || {},
    };
  },
  head(): any {
    return setHead(this.seo || null);
  },
});
</script>
