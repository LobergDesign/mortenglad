<template>
  <div>
    <h3 data-split-line-effect>{{ data }}</h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: string;
}>();
</script>
