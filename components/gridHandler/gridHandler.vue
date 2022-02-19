<template>
  <div>
    <section v-for="(item, i) in data.items" :key="i" class="spacing-b">
      {{ item }}
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
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GridHandler",
  props: {
    data: {
      type: Object as () => NGrid.IGridHanderData,
      default: null,
    },
  },
});
</script>
