<template>
  <div class="overflow-hidden">
    <div class="aaaaand-action" data-aaaaand-action></div>
    <div data-warm-blanket>
      <div v-if="data">
        <div class="smooth-container">
          <hero
            v-if="data.hero"
            :title="data.hero.title"
            :bodytext="data.hero.bodytext"
          />
          <accordion
            v-if="cvCollection"
            :data="cvCollection.cvListCollection.items"
          />
          <site-footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Vue from 'vue';
import { query } from '~/queries/cvpage';
import { query as cvCollectionQuery } from '~/queries/cvCollections';
import animations from '~/mixins/loadAnimations';
import smooth from '~/mixins/smooth';
import setHead from '~/utils/head';
export default Vue.extend({
  name: 'CvPage',
  mixins: [animations, smooth],

  async asyncData({ $apiResource, error }: Context) {
    const response = await $apiResource.getData(query);
    const cvCollection = await $apiResource.getDataWithLimit(
      cvCollectionQuery,
      null
    );
    if (!response) {
      return error;
    } else {
      const data = response.page;
      return {
        data,
        cvCollection: cvCollection.page,
        seo: data.seo,
      };
    }
  },
  head(): any {
    return setHead(this.seo || null);
  },
});
</script>
