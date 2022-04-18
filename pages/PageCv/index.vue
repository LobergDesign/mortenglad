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
