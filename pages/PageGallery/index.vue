<template>
  <div class="overflow-hidden">
    <div class="aaaaand-action" data-aaaaand-action></div>
    <div data-warm-blanket>
      <div v-if="data">
        <div class="smooth-container">
          <hero
            v-if="data.hero"
            :title="data.hero.title"
            :bodytext="data.hero.bodytext"
          />
          <image-gallery
            v-if="data.images"
            :images="data.images"
            @active-gallery="activeIndex"
          />

          <lazy-grid-handler
            v-if="data.dynamicBlockSectionCollection"
            :data="data.dynamicBlockSectionCollection"
          />
          <site-footer />
        </div>
        <lazy-image-gallery-enlarged
          :images="data.images"
          :activate-gallery="activateGallery"
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
import smooth from "~/mixins/smooth";
import setHead from "~/config/head";
export default Vue.extend({
  name: "GalleryPage",
  mixins: [animations, smooth],
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
      activateGallery: null,
    };
  },
  head(): any {
    return setHead(this.seo || null);
  },
  methods: {
    activeIndex(i: number) {
      this.activateGallery = -1;
      setTimeout(() => {
        this.activateGallery = i;
      }, 100);
    },
  },
});
</script>
