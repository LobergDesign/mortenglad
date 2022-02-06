<template>
  <section class="grid-showcase">
    <ui-headline-medium :data="'hej'" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GridShowCase",
  props: {
    data: {
      type: Object as () => any,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./gridShowCase.scss" scoped></style>
