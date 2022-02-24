/* eslint-disable vue/no-v-html */
<template>
  <div
    v-html="toHtmlString(data.json)"
    data-split-line-effect-bodytext
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

  methods: {
    toHtmlString(content: any) {
      return documentToHtmlString(content);
    },
  },
});
</script>
<style lang="scss" src="./bodytext.scss" scoped></style>
