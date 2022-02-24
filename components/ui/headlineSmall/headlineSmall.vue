<template>
  <div>
    <h3 data-split-line-effect>{{ data }}</h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UIHeadlineSmall",
  props: {
    data: {
      type: String,
      default: null,
    },
  },
});
</script>
