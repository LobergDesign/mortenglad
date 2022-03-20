<template>
  <div class="grid-w spacing-b image-gallery">
    <ul class="reset-ul grid-r image-gallery__list">
      <li v-for="(item, i) in images" :key="i" class="grid-c-4 grid-c-sm-6">
        <div class="image" @click="setActiveIndex(i)">
          <nuxt-img
            v-if="item.secure_url"
            provider="cloudinary"
            :src="item.secure_url"
            sizes="sm:100vw md:50vw lg:400px"
          />
        </div>
      </li>
    </ul>
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
  },
  data() {
    return {
      isActive: false,
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
<style lang="scss" src="./imageGallery.scss" scoped></style>
