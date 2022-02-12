<template>
  <h3>{{ data }}</h3>
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
