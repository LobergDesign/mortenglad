<template>
  <div class="hero">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-10 grid-sm-12">
          <h1
            v-if="title"
            class="hero__title"
            data-load-split-char-effect
            ref="testref"
          >
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
import { loadSplitCharEffect } from "~/utils/transitions";
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
  computed: {
    appIsReady() {
      const isAppReady = this.$store.state.global.isApplicationReady;
      return isAppReady;
    },
  },
  watch: {
    appIsReady() {
      this.appIsReady && this.loadAnimation();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.appIsReady && this.loadAnimation();
    });
  },
  methods: {
    loadAnimation() {
      const SplitText = this.$SplitText;
      const gsap = this.$gsap as NLib.IGsap;
      const target = this.$refs.testref as HTMLElement;
      target && loadSplitCharEffect(target, gsap, SplitText).action();
    },
  },
});
</script>
<style lang="scss" src="./hero.scss" scoped></style>
