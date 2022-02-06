<template>
  <section>
    {{ data }}
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GridHandler",
  props: {
    data: {
      type: Object as () => NGridHandler.IGridHanderData,
      default: null,
    },
  },
});
</script>
