<template>
  <nuxt-link
    :to="{
      path: data.link.cvLink.slug + '/',
      hash: '#' + data.collectionType,
    }"
  >
    <template v-if="data.link.cvLinkText">
      {{ data.link.cvLinkText }}
    </template>
    <template v-else> Go to my {{ data.link.cvLink.title }} page </template>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CVCollectionLink",
  props: {
    data: {
      type: Object as () => any,
      default: null,
    },
  },
});
</script>
