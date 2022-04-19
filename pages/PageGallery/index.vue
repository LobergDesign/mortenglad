<template>
  <div class="overflow-hidden">
    <div class="aaaaand-action" data-aaaaand-action>
      <h1 id="look-at-me-mom"></h1>
    </div>
    <div data-warm-blanket>
      <div v-if="data">
        <hero
          v-if="data.hero"
          :title="data.hero.title"
          :bodytext="data.hero.bodytext"
        />

        <image-gallery :images="data.images" />

        <lazy-grid-handler
          v-if="data.dynamicBlockSectionCollection"
          :data="data.dynamicBlockSectionCollection"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import { query } from "~/queries/gallerypage";
import animations from "~/mixins/loadAnimations";
import setHead from "~/config/head";
export default Vue.extend({
  name: "GalleryPage",
  mixins: [animations],
  async asyncData({ $apiResource, error }: Context) {
    const response = await $apiResource.getData(query);

    if (!response) {
      return error;
    } else {
      return {
        data: response.page,
        seo: response.page.seo,
      };
    }
  },
  data() {
    return {
      data: ({} as NPage.IStandardPage) || {},
    };
  },
  head(): any {
    return setHead(this.seo || null);
  },
});
</script>
