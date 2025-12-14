<template>
  <div :class="isMedium ? 'hero--medium' : 'hero'">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-12 grid-sm-10">
          <ui-headline
            class="hero__title"
            :data="{
              heroTitle: title,
            }"
          />
        </div>
        <div class="grid-c-12 grid-c-sm-6">
          <ui-bodytext v-if="bodytext" :data="bodytext" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  bodytext?: string;
  isMedium?: boolean;
}>();
</script>
<style lang="scss" src="./hero.scss" scoped></style>
