<template>
  <nuxt-link :to="data.link.slug" data-inview-simple-show-effect>
    <template v-if="data.linktext">
      {{ data.linktext }}
    </template>
    <template v-else>
      {{ data.link.title }}
    </template>
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{
  data: NGlobal.ILinkComponent;
}>();
</script>
<style lang="scss" src="./link.scss" scoped></style>
