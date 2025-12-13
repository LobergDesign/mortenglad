<template>
  <div>
    <div class="aaaaand-action" data-aaaaand-action></div>
    <div data-warm-blanket>
      <div v-if="data && !pending">
        <div class="smooth-container">
          <hero
            v-if="data.page.hero"
            :title="data.page.hero.title"
            :bodytext="data.page.hero.bodytext"
          />
          <accordion
            v-if="cvCollection.pageCv"
            :data="cvCollection.pageCv.cvListCollection.items"
          />
          <lazy-site-footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import setHead from '~/utils/head';
const { data: cvCollection } = await useCVCollection(null);
const { data, pending } = await useCVPage();
useSeoMeta(setHead(data.value!.page.seo));
</script>
