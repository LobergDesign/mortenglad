<template>
  <div v-if="data">
    <hero
      v-if="data.hero"
      :title="data.hero.title"
      :bodytext="data.hero.bodytext"
    />

    <section
      v-for="(item, i) in data.videoListCollection.items"
      :key="i"
      class="video-list"
    >
      <ui-video :data="item" :small-headline="true" />
    </section>

    <lazy-grid-handler
      v-if="data.dynamicBlockSectionCollection"
      :data="data.dynamicBlockSectionCollection"
    />
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import { query } from "~/queries/showreelspage";

export default Vue.extend({
  name: "ShowreelsPage",

  async asyncData({ $apiResource, error }: Context) {
    const response = await $apiResource.getData(query);

    if (!response) {
      return error;
    } else {
      return {
        data: response.page,
      };
    }
  },
  data() {
    return {
      data: ({} as NPage.IStandardPage) || {},
    };
  },
});
</script>
