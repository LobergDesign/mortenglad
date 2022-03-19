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
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-6">
          <button type="button" :class="{ 'is-inactive': !less }" @click="prev">
            Prev
          </button>
          <button type="button" :class="{ 'is-inactive': !more }" @click="next">
            next {{ !more }}
          </button>
        </div>
        <div class="grid-c-6"></div>
      </div>
    </div>
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
      more: true,
      less: false,
    };
  },
  methods: {
    // method to show/hide prev/next
    moreLess() {
      // more
      this.activeIndex === this.imageAmount - 1
        ? (this.more = false)
        : (this.more = true);
      // less
      this.activeIndex === 0 ? (this.less = false) : (this.less = true);
    },
    // set active slide index
    setActiveIndex(i: number) {
      this.activeIndex = i;
      this.setActiveImage(i);
      this.moreLess();
    },
    // slide gallery
    slideGallery() {
      const imageGallery = this.$refs.gallery as HTMLElement;
      const transform = this.activeIndex * 100;
      imageGallery.style.transform = `translateX(-${transform}%)`;
    },
    // set inital active image on click
    setActiveImage() {
      this.slideGallery();
    },
    // slide next
    next() {
      this.activeIndex = ++this.activeIndex;
      this.slideGallery();
      this.moreLess();
    },
    // slide prev
    prev() {
      this.activeIndex = --this.activeIndex;
      this.slideGallery();
      this.moreLess();
    },
  },
});
</script>
<style lang="scss" src="./imageGallery.scss" scoped></style>
