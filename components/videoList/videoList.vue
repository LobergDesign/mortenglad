<template>
  <div>
    <section v-for="(item, i) in data" :key="i" class="video-list">
      <ui-video :data="item" :small-headline="true" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "VideoList",
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./videoList.scss" scoped></style>
