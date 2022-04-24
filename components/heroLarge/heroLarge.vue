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
      <div class="hero-large__images">
        <div
          v-for="(image, i) in data.heroImages"
          :key="i"
          data-inview-simple-show-effect
        >
          <ui-image :data="image" :sizes="'sm:100vw md:50vw lg:40vw'" />
        </div>
      </div>
    </div>
    <circle-effect />
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
});
</script>
<style lang="scss" src="./heroLarge.scss" scoped></style>
