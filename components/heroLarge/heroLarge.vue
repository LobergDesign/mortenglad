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
      <div
        v-for="(image, i) in data.heroImages"
        :key="i"
        class="hero-large__media-image"
      >
        <div class="image no-aspect-ratio">
          <nuxt-img v-if="image.url" provider="cloudinary" :src="image.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeroLarge",
  props: {
    data: {
      type: Object as () => NHeroLarge.IHeroLargeData,
      default: null,
    },
  },
  data() {
    return {
      ease: "power4.out",
      duration: "0.65",
    };
  },
  mounted() {
    this.heroSlider();
  },
  methods: {
    initHeroMediaElement() {
      // create init effect of fade in wrap on load
    },
    heroSlider() {
      const images = document.querySelectorAll(
        ".hero-large__media-image"
      ) as NodeListOf<HTMLElement>;
      const totalImages = images.length;
      let activeImageIndex: number = 0;
      // hide all images exept first
      images[0].style.opacity = "1";

      const setNewOpacity = () => {
        images.forEach((e, i) => {
          if (i !== activeImageIndex) {
            e.style.opacity = "0";
          }
        });
        images[activeImageIndex].style.opacity = "1";
        activeImageIndex = activeImageIndex + 1;
        if (activeImageIndex === totalImages) {
          activeImageIndex = 0;
        }
      };
      setInterval(setNewOpacity, 5000);
    },
  },
});
</script>
<style lang="scss" src="./heroLarge.scss" scoped></style>
