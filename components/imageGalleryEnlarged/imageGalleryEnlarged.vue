<template>
  <div v-if="loaded">
    <transition name="fade">
      <div v-show="isActive" class="image-gallery-enlarged">
        <button
          type="button"
          class="image-gallery-enlarged__close"
          @click="closeGallery"
        >
          <Cross />
        </button>
        <div
          class="image-gallery-enlarged__backdrop"
          @click="closeGallery"
        ></div>
        <button
          type="button"
          class="image-gallery-enlarged__btn"
          :class="{ 'is-inactive': !less }"
          @click="prev"
        >
          <Arrow />
        </button>
        <ul ref="gallery" class="image-gallery-enlarged__list">
          <li v-for="(item, i) in images" :key="i">
            <div class="image" :class="{ 'is-active': activeIndex === i }">
              <nuxt-img
                v-if="item.original_secure_url"
                provider="cloudinary"
                :src="item.original_secure_url"
              />
            </div>
          </li>
        </ul>
        <button
          type="button"
          class="image-gallery-enlarged__btn image-gallery-enlarged__btn--next"
          :class="{ 'is-inactive': !more }"
          @click="next"
        >
          <Arrow />
        </button>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Arrow from "~/assets/svg/arrow.svg?inline";
import Cross from "~/assets/svg/cross.svg?inline";
export default Vue.extend({
  name: "ImageGallery",
  components: {
    Arrow,
    Cross,
  },
  props: {
    images: {
      type: Array as () => NGlobal.IMedia[],
      default: null,
    },
    activateGallery: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isActive: false,
      activeIndex: 0,
      imageAmount: this.images.length,
      more: true,
      less: false,
      loaded: false,
    };
  },
  watch: {
    activateGallery(newValue, _oldValue) {
      this.isActive = true;
      this.activeIndex = newValue;
      this.slideGallery(false);
      this.moreLess();
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.loaded = true;
      }, 600);
    });
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
      this.isActive = true;
      this.activeIndex = i;
      this.slideGallery(false);

      this.moreLess();
    },
    // slide gallery
    slideGallery(animate: boolean = true) {
      const imageGallery = this.$refs.gallery as HTMLElement;
      const transform = this.activeIndex * 100;
      const gsap = this.$gsap as NLib.IGsap;
      if (animate) {
        gsap.to(imageGallery, {
          duration: 0.7,
          xPercent: "-" + transform,
          ease: "power4.out",
        });
      } else {
        gsap.to(imageGallery, {
          duration: 0,
          xPercent: "-" + transform,
        });
      }
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
    // close gallery
    closeGallery() {
      this.isActive = false;
    },
  },
});
</script>
<style lang="scss" src="./imageGalleryEnlarged.scss" scoped></style>
