<template>
  <div class="grid-images">
    <template v-if="data.images.length === 3">
      <div class="grid-r">
        <div
          v-for="(item, i) in data.images"
          :key="i"
          class="grid-c-4 grid-c-xs-6"
        >
          <ui-image :data="item" :sizes="'sm:50vw md:300px lg:800px'" />
        </div>
      </div>
    </template>
    <template v-else>
      <div class="grid-w">
        <div class="grid-r">
          <div
            v-for="(item, i) in data.images"
            :key="i"
            :class="[
              data.images.length === 2
                ? 'grid-c-6 grid-c-xs-12'
                : 'grid-c-8-offset-2  grid-remove-offset-sm ',
            ]"
          >
            <ui-image :data="item" :sizes="'sm:100vw md:300px lg:1000px'" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: NGrid.IGridImages;
}>();
</script>
