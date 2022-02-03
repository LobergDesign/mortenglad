<template>
  <div class="headline">
    <h1 v-if="data.heroTitle" class="xl" data-custom-split-text>
      {{ data.heroTitle }}
    </h1>
    <span v-if="data.heroTitleExtension" class="headline__title-extension">
      {{ data.heroTitleExtension }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UIHeadline",
  props: {
    data: {
      type: Object as () => NHeroLarge.IHeroLargeData,
      default: null,
    },
  },
  data() {
    return {
      $gsap: Object as () => NLib.IGsap,
      $SplitText: Object as () => NLib.IGsap,
    };
  },
  mounted() {
    this.splitWord();
  },
  methods: {
    splitWord() {
      const SplitText = this.$SplitText;
      // @ts-ignore
      const gsap = this.$gsap as NLib.IGsap;
      const tl = gsap.timeline();
      const target = document.querySelector("[data-custom-split-text]");

      const mySplitText = new (SplitText as any)(target, {
        type: "chars",
      });
      const chars = mySplitText.chars;

      tl.from(chars, {
        duration: 0.9,
        opacity: 0,
        x: -120,
        force3D: true,
        fontWeight: 100,
        ease: "power3.out",
        stagger: 0.05,
      });
    },
  },
});
</script>
<style lang="scss" src="./headline.scss" scoped></style>
