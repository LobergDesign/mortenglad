<template>
  <div class="image">
    <nuxt-img provider="cloudinary" :src="data.url" :sizes="sizes" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UIImage",
  props: {
    data: {
      type: Object as () => NGlobal.IImage,
      default: null,
    },
    sizes: {
      type: String,
      default: "sm:100vw md:50vw lg:400px",
    },
  },
});
</script>
<style lang="scss" src="./image.scss" scoped></style>
