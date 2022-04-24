<template>
  <div class="grid-gallery">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c text-right">
          <ui-headline
            v-if="data.title"
            :data="{ title: data.title, headlineType: 'h2' }"
          />
          <ui-link
            v-if="data.linkToGallery"
            :data="{ link: data.linkToGallery, linktext: data.linkText }"
          />
        </div>
      </div>
    </div>
    <div ref="slider" class="keen-slider" data-inview-simple-show-effect>
      <div
        v-for="(item, i) in data.images"
        :key="i"
        class="keen-slider__slide number-slide"
      >
        <nuxt-img
          v-if="item.url"
          loading="lazy"
          provider="cloudinary"
          :src="item.url"
          :sizes="'sm:80vw lg:100vw'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

export default Vue.extend({
  name: "GridGallery",
  props: {
    data: {
      type: Object as () => NGrid.IGridGallery,
      default: null,
    },
  },
  data() {
    return {
      slider: null,
    };
  },
  mounted() {
    const slider = this.$refs.slider as HTMLDivElement;
    this.slider = new KeenSlider(slider, {
      loop: true,
      mode: "free",
      dragSpeed: 0.5,
      slides: {
        perView: 3,
        spacing: 40,
      },
      breakpoints: {
        "(max-width: 1100px)": {
          slides: {
            perView: 2,
            spacing: 30,
          },
        },
        "(max-width: 700px)": {
          slides: {
            perView: 1.4,
            spacing: 20,
          },
        },
      },
    });
  },
  beforeDestroy() {
    if (this.slider) (this.slider as any).destroy();
  },
});
</script>
<style lang="scss" src="./gridGallery.scss" scoped></style>
