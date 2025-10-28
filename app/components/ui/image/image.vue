<template>
  <div
    class="image"
    :class="{ 'no-aspect-ratio': !aspectRatio }"
    data-inview-simple-show-effect
  >
    <nuxt-img
      v-if="data.url"
      provider="cloudinary"
      :src="data.url"
      :sizes="sizes"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: NGlobal.IMedia;
  sizes?: string;
  aspectRatio?: boolean;
}>();
</script>
<style lang="scss" src="./image.scss" scoped></style>
