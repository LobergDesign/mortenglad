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
    <div class="grid-slider">
      <div class="grid-slider__wrap">
        <div
          v-for="(item, i) in data.images"
          :key="i"
          class="grid-slider__item-wrap"
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";

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
      ease: "power4.out",
      duration: "0.65",
    };
  },
  mounted() {
    this.customSlider().initSlide();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.customSlider().initSlide);
    this.customSlider().disableSlide();
  },
  methods: {
    wrapEffect(target: HTMLElement, active: boolean) {
      const tl = this.$gsap.timeline({
        defaults: { duration: this.duration, ease: this.ease },
      });
      if (active) {
        tl.to(target, {
          scale: 0.9,
        });
      } else {
        tl.to(target, {
          scale: 1,
        });
      }
    },
    imageEffect(target: HTMLElement, active: boolean) {
      const tl = this.$gsap.timeline({
        defaults: { duration: this.duration, ease: this.ease },
      });
      if (active) {
        tl.to(target, {
          scale: 1.3,
        });
      } else {
        tl.to(target, {
          scale: 1,
        });
      }
    },

    customSlider() {
      const d = this.$Draggable;
      const elm = ".grid-slider .grid-slider__wrap";
      const innerElm = ".grid-slider__item-wrap";
      const img = ".grid-slider__item-wrap img";
      if (document.querySelector(elm)) {
        const initSlide = () => {
          d.create(elm, {
            type: "x",
            edgeResistance: 0.8,
            inertia: true,
            onPress: () => {
              this.wrapEffect(innerElm, true);
              this.imageEffect(img, true);
            },
            onRelease: () => {
              this.wrapEffect(innerElm, false);
              this.imageEffect(img, false);
            },
            bounds: {
              minX:
                -(
                  document.querySelector(".grid-slider__wrap") as HTMLDivElement
                ).offsetWidth +
                (document.querySelector(".grid-slider") as HTMLDivElement)
                  .offsetWidth,
              maxX: 0,
            },
          });
        };

        const disableSlide = () => {
          this.$Draggable.get(elm).kill();
        };
        return { initSlide, disableSlide };
      }
    },
  },
});
</script>
<style lang="scss" src="./gridGallery.scss" scoped></style>
