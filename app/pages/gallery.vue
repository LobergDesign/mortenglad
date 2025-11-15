<template>
  <div class="aaaaand-action" data-aaaaand-action></div>
  <div data-warm-blanket>
    <div v-if="data && !pending">
      <div class="smooth-container">
        <hero
          v-if="data.page.hero"
          :title="data.page.hero.title"
          :bodytext="data.page.hero.bodytext"
        />
        <image-gallery
          v-if="data.page.images"
          :images="data.page.images"
          @active-gallery="activeIndex"
        />

        <lazy-grid-handler
          v-if="data.page.dynamicBlockSectionCollection"
          :data="data.page.dynamicBlockSectionCollection"
        />
        <lazy-site-footer />
      </div>

      <lazy-image-gallery-enlarged
        :images="data.page.images"
        :activate-gallery="activateGallery"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import setHead from '~/utils/head';
const { data, pending } = await useGalleryPage();
useSeoMeta(setHead(data.value!.page.seo));
const activateGallery = ref(-1);
const activeIndex = (i: number) => {
  activateGallery.value = -1;
  setTimeout(() => {
    activateGallery.value = i;
  }, 100);
};
</script>
