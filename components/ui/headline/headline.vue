<template>
  <div class="headline">
    <h2
      v-if="data.headlineType === 'h2'"
      class="h1"
      data-load-split-char-effect
    >
      {{ data.title }}
    </h2>

    <h1 v-else-if="data.heroTitle" data-load-split-char-effect ref="testref">
      {{ data.heroTitle }}
    </h1>

    <span v-if="data.heroTitleExtension" class="headline__title-extension">
      {{ data.heroTitleExtension }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { loadSplitCharEffect } from "~/utils/transitions";
export default Vue.extend({
  name: "UIHeadline",
  props: {
    data: {
      type: Object as () => NHeroLarge.IHeroLargeData,
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
<style lang="scss" src="./headline.scss" scoped></style>
