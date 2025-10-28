<template>
  <div>
    <section v-for="(item, i) in data" :key="i" class="video-list">
      <ui-video :data="item" :small-headline="true" />
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: NShowreels.IShowreel[];
}>();
</script>
<style lang="scss" src="./videoList.scss" scoped></style>
