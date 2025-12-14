<template>
  <div class="hero-large">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-12">
          <div class="hero-large__title-w">
            <ui-headline
              class="xl"
              :data="{
                heroTitle: data.heroTitle,
                heroTitleExtension: data.heroTitleExtension,
              }"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="hero-large__media">
      <div
        class="hero-large__media-backdrop"
        :class="'opacity-' + data.backdropOpacity"
      ></div>
      <div v-if="!data.heroVideo">
        <div
          v-for="(image, i) in data.heroImages"
          :key="i"
          class="hero-large__media-image"
        >
          <div class="image no-aspect-ratio">
            <nuxt-img
              v-if="image.public_id"
              provider="cloudinary"
              :src="image.public_id"
              :alt="data.heroTitle || 'Hero image'"
              :loading="i === 0 ? 'eager' : 'lazy'"
              sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
              :modifiers="{ width: 1920 }"
              format="auto"
              quality="85"
            />
          </div>
        </div>
      </div>
      <div v-if="data.heroVideo">
        <video
          v-if="data.heroVideo"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          class="hero-large__video"
          provider="cloudinary"
        >
          <source
            v-if="data.heroVideo[0]"
            :src="data.heroVideo[0].original_secure_url"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = defineProps<{
  data: NHeroLarge.IHeroLargeData;
}>();
const ease = 'power4.out';
const duration = '3';
const { gsap } = useGsap();
const intervalId = ref<number | null>(null);

const heroSlider = () => {
  const images = document.querySelectorAll(
    '.hero-large__media-image',
  ) as NodeListOf<HTMLElement>;
  const totalImages = images.length;
  let activeImageIndex: number = 0;
  // hide all images exept first
  if (!images[0]) return;
  gsap.to(images[0], {
    opacity: 1,
  });

  const setNewOpacity = () => {
    images.forEach((e, i) => {
      if (i !== activeImageIndex) {
        gsap.to(e, {
          duration: duration,
          ease: ease,
          opacity: 0,
        });
      }
    });

    gsap.to(images[activeImageIndex]!, {
      opacity: 1,
      duration: duration,
      ease: ease,
    });
    activeImageIndex = activeImageIndex + 1;
    if (activeImageIndex === totalImages) {
      activeImageIndex = 0;
    }
  };

  // Clear any existing interval first
  if (intervalId.value) clearInterval(intervalId.value);

  // Store the new interval ID
  intervalId.value = setInterval(setNewOpacity, 4000) as unknown as number;
};

onMounted(() => {
  if (!data.heroVideo?.length) {
    heroSlider();
  }
});

onBeforeUnmount(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
});
</script>
<style lang="scss" src="./heroLarge.scss" scoped></style>
