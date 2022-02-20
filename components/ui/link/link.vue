<template>
  <nuxt-link :to="data.link.slug">
    <template v-if="data.linktext">
      {{ data.linktext }}
    </template>
    <template v-else>
      {{ data.link.title }}
    </template>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UILink",
  props: {
    data: {
      type: Object as () => NGlobal.ILinkComponent,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./link.scss" scoped></style>
