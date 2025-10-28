<template>
  <div class="headline-medium">
    <h2 data-split-line-effect>{{ data }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: string;
}>();
</script>
