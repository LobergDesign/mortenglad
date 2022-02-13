<template>
  <div class="hero">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-12">
          <div class="hero-large__title-w">
            <h1 v-if="title">
              {{ title }}
            </h1>
            <ui-bodytext v-if="bodytext" :data="bodytext.json" />
            <!-- <ui-headline
              :data="{
                heroTitle: data.heroTitle,
                heroTitleExtension: data.heroTitleExtension,
              }"
            /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeroComponent",
  props: {
    title: {
      type: String,
      default: null,
    },
    bodytext: {
      type: Object,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./hero.scss" scoped></style>
