<template>
  <div class="hero">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-10 grid-sm-12">
          <h1 v-if="title" class="hero__title" data-load-split-char-effect>
            {{ title }}
          </h1>
        </div>
        <div class="grid-c-6 grid-c-sm-12">
          <ui-bodytext v-if="bodytext" :data="bodytext" />
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
