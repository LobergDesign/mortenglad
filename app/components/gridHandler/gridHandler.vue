<template>
  <div>
    <section v-for="(item, i) in data.items" :key="i" class="spacing-b">
      <lazy-grid-show-case
        v-if="item.blockType === 'ShowcaseSection'"
        :data="item"
      />
      <lazy-grid-gallery
        v-if="item.blockType === 'GallerySection'"
        :data="item"
      />
      <lazy-grid-text-area
        v-if="item.blockType === 'SimpleTextArea'"
        :data="item"
      />
      <lazy-grid-images v-if="item.blockType === 'ImageSection'" :data="item" />
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: NGrid.IGridHanderData;
}>();
</script>
