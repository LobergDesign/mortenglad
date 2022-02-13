<template>
  <div v-if="data">
    <hero :title="data.hero.title" :bodytext="data.hero.bodytext" />
    <pre>
      {{ data }}
    </pre>
    <pre>
      {{ cvCollection }}
    </pre>
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
    console.log("response", response);
    const cvCollection = await $apiResource.getData(cvCollectionQuery);
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
      data: Object as () => NPage.IStandardPage,
      cvCollection: null,
    };
  },
});
</script>
