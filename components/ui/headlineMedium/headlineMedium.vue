<template>
  <div class="headline-medium">
    <h2 data-split-line-effect>{{ data }}</h2>
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
});
</script>
