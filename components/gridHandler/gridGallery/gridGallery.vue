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
  mounted() {
    this.customSlider();
  },
  methods: {
    customSlider() {
      const d = this.$Draggable;
      const testVar = () => {
        console.log("hello", this.$inertia);
      };
      d.create(".grid-slider .grid-slider__wrap", {
        type: "x",
        edgeResistance: 0.5,
        inertia: true,
        allowContextMenu: true,
        onDrag: testVar(),
        onThrowComplete: function () {
          console.log(this.x);
        },
        bounds: {
          minX:
            -document.querySelector(".grid-slider__wrap")!.offsetWidth +
            document.querySelector(".grid-slider")!.offsetWidth,
          maxX: 0,
        },
      });
    },
  },
});
</script>
<style lang="scss" src="./gridGallery.scss" scoped></style>
