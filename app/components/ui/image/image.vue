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
export default Vue.extend({
  name: 'UIImage',
  props: {
    data: {
      type: Object as () => NGlobal.IMedia,
      default: null,
    },
    sizes: {
      type: String,
      default: 'sm:100vw md:50vw lg:400px',
    },
    aspectRatio: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
<style lang="scss" src="./image.scss" scoped></style>
