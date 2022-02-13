<template>
  <div v-if="data">
    <hero :title="data.hero.title" :bodytext="data.hero.bodytext" />
    <lazy-accordion
      v-if="cvCollection"
      :data="cvCollection.cvListCollection.items"
    />
    <!-- <pre>
      {{ data }}
    </pre>
    <pre>
      {{ cvCollection }}
    </pre> -->
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import { query } from "~/queries/cvpage";
import { query as cvCollectionQuery } from "~/queries/cvCollections";
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
      const data = response.pageCv;

      return {
        data,
        cvCollection: cvCollection.pageCv || null,
      };
    }
  },
  data() {
    return {
      data: Object as () => NPage.IStandardPage | null,
      cvCollection: null,
    };
  },
});
</script>
