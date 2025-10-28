<template>
  <div class="grid-showcase">
    <ui-video :data="data" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  data: NShowreels.IShowreel;
}>();
</script>
