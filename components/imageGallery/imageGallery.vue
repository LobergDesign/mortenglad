<template>
  <div class="grid-w spacing-b">
    <ul class="reset-ul grid-r image-gallery-list">
      <li
        v-for="(item, i) in images"
        :key="i"
        class="grid-c-4 grid-c-sm-6"
        data-inview-simple-show-effect
      >
        <div class="image" @click="setActiveIndex(i)">
          <nuxt-img
            v-if="item.secure_url"
            provider="cloudinary"
            :src="item.secure_url"
            sizes="sm:100vw md:50vw lg:800px"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ImageGallery",
  props: {
    images: {
      type: Array as () => NGlobal.IMedia[],
      default: null,
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },

  methods: {
    // set active slide index
    setActiveIndex(i: number) {
      this.$emit("active-gallery", i);
      this.activeIndex = i;
    },
  },
});
</script>
<style lang="scss" src="./imageGallery.scss" scoped></style>
