<template>
  <div class="image" :class="{ 'no-aspect-ratio': !aspectRatio }">
    <nuxt-img
      v-if="data.url"
      provider="cloudinary"
      :src="data.url"
      :sizes="sizes"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UIImage",
  props: {
    data: {
      type: Object as () => NGlobal.IMedia,
      default: null,
    },
    sizes: {
      type: String,
      default: "sm:100vw md:50vw lg:400px",
    },
    aspectRatio: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
<style lang="scss" src="./image.scss" scoped></style>
