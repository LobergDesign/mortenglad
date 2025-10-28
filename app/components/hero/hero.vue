<template>
  <div class="hero">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-10 grid-sm-12">
          <ui-headline
            class="hero__title"
            :data="{
              heroTitle: title,
            }"
          />
        </div>
        <div class="grid-c-6 grid-c-sm-12">
          <ui-bodytext v-if="bodytext" :data="bodytext" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  bodytext: string;
}>();
</script>
<style lang="scss" src="./hero.scss" scoped></style>
