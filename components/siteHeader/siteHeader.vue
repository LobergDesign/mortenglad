<template>
  <header>
    <pre v-if="data"
      >{{ data }}
   </pre
    >
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SiteHeader",
  props: {
    data: {
      type: Object as NHeader.IHeaderData,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./siteHeader.scss" scoped></style>
