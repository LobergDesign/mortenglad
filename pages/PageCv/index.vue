<template>
  <div class="overflow-hidden">
    <div class="aaaaand-action" data-aaaaand-action>
      <h1 id="look-at-me-mom"></h1>
    </div>
    <div class="warm-blanket">
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
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import { query } from "~/queries/cvpage";
import { query as cvCollectionQuery } from "~/queries/cvCollections";
import animations from "~/mixins/loadAnimations";
import setHead from "~/config/head";
export default Vue.extend({
  name: "CvPage",
  mixins: [animations],
  transition: {
    css: false,
    beforeLeave(el) {
      console.log("cv page beforeLeave", el);
    },
    leave(el, done) {
      console.log("cv page leave", el);
      const gsap = this.$gsap as NLib.IGsap;
      const newEl = el.querySelector(".warm-blanket");
      const elChild = el.querySelector("[data-aaaaand-action]");
      const tl = gsap;
      tl.to(newEl, {
        xPercent: 40,
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
      });

      tl.timeline()
        .fromTo(
          elChild,
          { xPercent: -100, backgroundColor: "#e9f1f7" },
          {
            xPercent: 0,
            backgroundColor: "#151515",
            duration: 1,
            ease: "power4.out",
          }
        )
        .to(elChild, {
          xPercent: 100,
          onComplete: () => done(),
        });
    },

    afterLeave(el) {
      console.log("cv page afterLeave", el);
    },

    beforeEnter(el) {
      console.log("cv page beforeEnter", el);
    },
    enter(el, done) {
      console.log("cv page enter", el);
      done();
    },
    afterEnter(el) {
      console.log("cv page afterEnter", el);
    },
  },

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
});
</script>
