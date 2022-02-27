<template>
  <div v-if="data">
    <hero
      v-if="data.hero"
      :title="data.hero.title"
      :bodytext="data.hero.bodytext"
    />
    <div class="grid-w spacing-b">
      <ul v-if="data.images" class="reset-ul grid-r">
        <li
          v-for="(item, i) in data.images"
          :key="i"
          class="grid-c-4 grid-c-sm-6"
        >
          <ui-image :data="item" :sizes="'sm:50vw lg:500px'" />
        </li>
      </ul>
    </div>

    <lazy-grid-handler
      v-if="data.dynamicBlockSectionCollection"
      :data="data.dynamicBlockSectionCollection"
    />
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import { query } from "~/queries/gallerypage";
import { loadSplitCharEffect } from "~/utils/transitions";
import ioTransitions from "~/utils/transitionSetter";
export default Vue.extend({
  name: "GalleryPage",

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
  mounted() {
    const SplitText = this.$SplitText;
    const gsap = this.$gsap as NLib.IGsap;
    const target = document.querySelector(
      "[data-load-split-char-effect]"
    ) as HTMLElement;
    target && ioTransitions(gsap, SplitText).init();
    loadSplitCharEffect(target, gsap, SplitText).init();
    this.$nextTick(() => {
      ioTransitions(gsap, SplitText).action();
      target && loadSplitCharEffect(target, gsap, SplitText).action();
    });
  },
});
</script>
