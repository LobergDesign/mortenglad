<template>
  <h3 data-test-target>{{ data }}</h3>
</template>

<script lang="ts">
import Vue from "vue";
import { ioSplitLineAnimation } from "~/utils/io";
export default Vue.extend({
  name: "UIHeadlineSmall",
  props: {
    data: {
      type: String,
      default: null,
    },
  },
  mounted() {
    const SplitText = this.$SplitText;
    const targets = document.querySelectorAll("[data-test-target]");
    ioSplitLineAnimation(targets, this.$gsap, SplitText);
  },
});
</script>
