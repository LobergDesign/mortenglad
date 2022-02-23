<template>
  <div class="headline">
    <h2 v-if="data.headlineType === 'h2'" class="h1" data-custom-split-text>
      {{ data.title }}
    </h2>
    <h1 v-else-if="data.heroTitle" class="xl" data-custom-split-text>
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
  // mounted() {
  //   this.splitWord();
  // },
  // methods: {
  //   splitWord() {
  //     const SplitText = this.$SplitText;
  //     const gsap = this.$gsap as NLib.IGsap;
  //     const tl = gsap.timeline();
  //     const target = document.querySelector("[data-custom-split-text]");

  //     const mySplitText = new SplitText(target, {
  //       type: "chars",
  //     });
  //     const chars = mySplitText.chars;

  //     tl.fromTo(
  //       chars,
  //       {
  //         opacity: 0,
  //         x: -120,
  //         fontWeight: 100,
  //       },
  //       {
  //         fontWeight: 400,
  //         x: 0,
  //         opacity: 1,
  //         force3D: true,
  //         duration: 0.9,
  //         stagger: 0.05,
  //         ease: "power3.out",
  //       }
  //     );
  //   },
  // },
});
</script>
<style lang="scss" src="./headline.scss" scoped></style>
