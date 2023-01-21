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
            <nuxt-img v-if="image.url" provider="cloudinary" :src="image.url" />
          </div>
        </div>
      </div>
      <div v-if="data.heroVideo">
        <video
          v-if="data.heroVideo"
          autoplay
          muted
          loop
          class="hero-large__video"
          provider="cloudinary"
        >
          <source
            :src="data.heroVideo[0].original_secure_url"
            type="video/mp4"
          />
          <source
            :src="data.heroVideo[0].original_secure_url"
            type="video/ogg"
          />
          Your browser does not support the video tag.
        </video>
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
      duration: "3",
    };
  },
  mounted() {
    if (!this.data.heroVideo?.length) {
      this.heroSlider();
    }
  },
  methods: {
    heroSlider() {
      const images = document.querySelectorAll(
        ".hero-large__media-image"
      ) as NodeListOf<HTMLElement>;
      const totalImages = images.length;
      let activeImageIndex: number = 0;
      // hide all images exept first

      const gsap = this.$gsap as NLib.IGsap;

      gsap.to(images[0], {
        opacity: 1,
      });

      const setNewOpacity = () => {
        images.forEach((e, i) => {
          if (i !== activeImageIndex) {
            gsap.to(e, {
              duration: this.duration,
              ease: this.ease,
              opacity: 0,
            });
          }
        });
        gsap.to(images[activeImageIndex], {
          opacity: 1,
          duration: this.duration,
          ease: this.ease,
        });
        activeImageIndex = activeImageIndex + 1;
        if (activeImageIndex === totalImages) {
          activeImageIndex = 0;
        }
      };
      setInterval(setNewOpacity, 4000);
    },
  },
});
</script>
<style lang="scss" src="./heroLarge.scss" scoped></style>
