<template>
  <div class="aaaaand-action" data-aaaaand-action></div>
  <div data-warm-blanket>
    <div v-if="data && !pending">
      <div class="smooth-container">
        <hero
          v-if="data.page.hero"
          :title="data.page.hero.title"
          :bodytext="data.page.hero.bodytext"
        />
        <contact-section
          v-if="globalData && !globalPending"
          :data="globalData.globalSettings"
        />
        <lazy-grid-handler
          v-if="data.page.dynamicBlockSectionCollection"
          :data="data.page.dynamicBlockSectionCollection"
        />
        <lazy-site-footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import setHead from '~/utils/head';
const { data, pending } = await useContactPage();
const { data: globalData, pending: globalPending } = await useGlobaleSettings();
useSeoMeta(setHead(data.value!.page.seo));
</script>
