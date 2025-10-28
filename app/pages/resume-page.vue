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
          <stats
            :profile-additional-collection="data.profileAdditionalCollection"
            :profile-collection="data.profileCollection"
          />
          <lazy-grid-handler
            v-if="data.dynamicBlockSectionCollection"
            :data="data.dynamicBlockSectionCollection"
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
import { query } from '~/queries/resumepage';
import animations from '~/mixins/loadAnimations';
import smooth from '~/mixins/smooth';
import setHead from '~/utils/head';
export default Vue.extend({
  name: 'ResumePage',
  mixins: [animations, smooth],
  async asyncData({ $apiResource, error }: Context) {
    const response = await $apiResource.getData(query);

    if (!response) {
      return error;
    } else {
      return {
        data: response.page,
        seo: response.page.seo,
      };
    }
  },
  data() {
    return {
      data: ({} as NPage.IStandardPage) || {},
    };
  },
  head(): any {
    return setHead(this.seo || null);
  },
});
</script>
