<template>
  <div v-if="loaded">
    <transition name="fade">
      <div v-show="isActive" class="image-gallery-enlarged">
        <button
          type="button"
          class="image-gallery-enlarged__close"
          @click="closeGallery"
        >
          <nuxt-icon name="cross" />
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
          <nuxt-icon name="arrow" />
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
          <nuxt-icon name="arrow" />
        </button>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
const { images, activateGallery } = defineProps<{
  images: NGlobal.IMedia[];
  activateGallery: number;
}>();

const emit = defineEmits<{
  (e: 'active-gallery', index: number): void;
}>();

const isActive = ref(false);
const activeIndex = ref(0);
const imageAmount = ref(images.length);
const more = ref(true);
const less = ref(false);
const loaded = ref(false);
const $gsap = (window as any).gsap;
const gallery = useTemplateRef('gallery');

const moreLess = () => {
  // more
  activeIndex.value === imageAmount.value - 1
    ? (more.value = false)
    : (more.value = true);
  // less
  activeIndex.value === 0 ? (less.value = false) : (less.value = true);
};

const slideGallery = (animate: boolean = true) => {
  const imageGallery = gallery.value as unknown as HTMLElement;
  const transform = activeIndex.value * 100;
  if (animate) {
    $gsap.to(imageGallery, {
      duration: 0.7,
      xPercent: '-' + transform,
      ease: 'power4.out',
    });
  } else {
    $gsap.to(imageGallery, {
      duration: 0,
      xPercent: '-' + transform,
    });
  }
};

const setActiveIndex = (i: number) => {
  isActive.value = true;
  activeIndex.value = i;
  slideGallery(false);

  moreLess();
};

const next = () => {
  activeIndex.value = ++activeIndex.value;
  slideGallery();
  moreLess();
};

const prev = () => {
  activeIndex.value = --activeIndex.value;
  slideGallery();
  moreLess();
};

const closeGallery = () => {
  isActive.value = false;
};

watch(
  () => activateGallery,
  (newValue, _oldValue) => {
    isActive.value = true;
    activeIndex.value = newValue;
    slideGallery(false);
    moreLess();
  }
);
</script>
<style lang="scss" src="./imageGalleryEnlarged.scss" scoped></style>
