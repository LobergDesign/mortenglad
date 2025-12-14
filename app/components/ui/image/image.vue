<template>
  <div
    class="image"
    :class="{ 'no-aspect-ratio': !aspectRatio }"
    data-inview-simple-show-effect
  >
    <nuxt-img
      v-if="data.public_id"
      provider="cloudinary"
      :src="data.public_id"
      :sizes="sizes"
      alt=""
      loading="lazy"
      format="auto"
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
