<template>
  <footer>
    <h2 v-if="data">{{ data }}</h2>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SiteFooter",
  props: {
    data: {
      type: Object as NFotter.IFooterData,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./siteFooter.scss" scoped></style>
