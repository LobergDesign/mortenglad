/* eslint-disable no-new */
<template>
  <div
    v-html="toHtmlString(data.json)"
    data-split-bodytext
    class="bodytext"
  ></div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
export default Vue.extend({
  name: "UIBodytext",
  props: {
    data: {
      type: Object,
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
    toHtmlString(content: any) {
      return documentToHtmlString(content);
    },
    splitWord() {
      const SplitText = this.$SplitText;
      // @ts-ignore
      const gsap = this.$gsap as NLib.IGsap;

      const target = document.querySelector("[data-split-bodytext] p");

      // eslint-disable-next-line no-new
      new (SplitText as any)(target, {
        type: "lines",
        linesClass: "lineChild",
      });
      // eslint-disable-next-line no-new
      new (SplitText as any)(target, {
        type: "lines",
        linesClass: "overflow-hidden",
      });

      gsap
        .timeline()
        .staggerFrom(
          ".lineChild",
          1,
          { yPercent: 110, force3D: true, opacity: 1, ease: "power2.inOut" },
          0.08
        );
    },
  },
});
</script>
<style lang="scss" src="./bodytext.scss" scoped></style>
