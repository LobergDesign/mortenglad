<template>
  <div class="headline-medium">
    <h2 data-split-headline-medium>{{ data }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UIHeadlineMedium",
  props: {
    data: {
      type: String,
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

      const target = document.querySelector("[data-split-headline-medium]");

      // eslint-disable-next-line no-new
      new (SplitText as any)(target, {
        type: "lines",
        linesClass: "child",
      });
      // eslint-disable-next-line no-new
      new (SplitText as any)(target, {
        type: "lines",
        linesClass: "overflow-hidden",
      });

      gsap
        .timeline()
        .staggerFrom(
          ".child",
          1,
          { yPercent: 100, force3D: true, opacity: 1, ease: "power3.inOut" },
          0.06
        );
    },
  },
});
</script>
