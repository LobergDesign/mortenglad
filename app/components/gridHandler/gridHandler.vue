<template>
  <section v-for="(item, i) in data.items" :key="i" class="spacing-b">
    <lazy-grid-handler-grid-gallery
      v-if="item.blockType === 'GallerySection'"
      :data="item"
    />
    <lazy-grid-handler-grid-text-area
      v-if="item.blockType === 'SimpleTextArea'"
      :data="item"
    />
    <lazy-grid-handler-grid-images
      v-if="item.blockType === 'ImageSection'"
      :data="item"
    />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  data: NGrid.IGridHanderData;
}>();
</script>
