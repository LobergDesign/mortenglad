<template>
  <div class="grid-w spacing-b image-gallery">
    <!-- <pre>
      {{ images }}
    </pre> -->
    <ul class="reset-ul grid-r">
      <li v-for="(item, i) in images" :key="i" class="grid-c-4 grid-c-sm-6">
        <div class="image" @click="setActiveIndex(i)">
          <nuxt-img
            v-if="item.secure_url"
            provider="cloudinary"
            :src="item.secure_url"
            sizes="sm:100vw md:50vw lg:400px"
          />
          <h3>
            {{ i }}
          </h3>
        </div>
      </li>
    </ul>
    <ul ref="gallery" class="image-gallery-enlarged">
      <li
        v-for="(item, i) in images"
        :key="i"
        :class="{ 'is-active': activeIndex === i }"
      >
        <div class="image">
          <nuxt-img
            v-if="item.original_secure_url"
            provider="cloudinary"
            :src="item.original_secure_url"
          />
          <h3>
            {{ i }}
          </h3>
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
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      activeIndex: 0,
      imageAmount: this.images.length,
    };
  },
  methods: {
    setActiveIndex(i: number) {
      this.activeIndex = i;
      this.setActiveImage(i);
    },
    setActiveImage(index: number) {
      console.log("images", this.imageAmount);
      console.log("index", index);
      const imageGallery = this.$refs.gallery as HTMLElement;
      const transform = index * 100;
      console.log(transform);
      imageGallery.style.transform = `translateX(-${transform}%)`;
      console.log("imageGallery", imageGallery);
    },
  },
});
</script>
<style lang="scss" src="./imageGallery.scss" scoped></style>
