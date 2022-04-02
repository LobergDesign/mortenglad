<template>
  <div class="headline">
    <h2 v-if="data.headlineType === 'h2'" class="h1" data-io-split-char-effect>
      {{ data.title }}
    </h2>

    <h1 v-else-if="data.heroTitle" data-load-split-char-effect>
      {{ data.heroTitle }}
    </h1>

    <span v-if="data.heroTitleExtension" class="headline__title-extension">
      {{ data.heroTitleExtension }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "UIHeadline",
  props: {
    data: {
      type: Object as () => NHeroLarge.IHeroLargeData,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./headline.scss" scoped></style>
