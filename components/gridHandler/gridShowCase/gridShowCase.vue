<template>
  <div class="grid-showcase">
    <ui-video :data="data" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GridShowCase",

  props: {
    data: {
      type: Object as () => NShowreels.IShowreel,
      default: null,
    },
  },
});
</script>
