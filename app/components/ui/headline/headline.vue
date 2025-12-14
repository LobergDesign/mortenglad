<template>
  <div class="headline">
    <h2
      v-if="data.headlineType === 'h2' && data.title"
      class="h1"
      data-inview-simple-show-effect
    >
      {{ data.title }}
    </h2>

    <h1 v-else-if="data.heroTitle" data-load-split-char-effect>
      {{ data.heroTitle }}
    </h1>
    <span
      v-if="data.heroTitleExtension"
      class="headline__title-extension"
      data-split-line-effect
    >
      {{ data.heroTitleExtension }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: NHeroLarge.IHeroLargeData;
}>();
</script>
<style lang="scss" src="./headline.scss" scoped></style>
