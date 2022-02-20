<template>
  <div class="cv-collections">
    <div class="grid-w">
      <section v-for="(item, i) in data" :key="i" class="grid-r">
        <div
          class="grid-c-md-12 grid-c-4"
          :class="{ 'text-right text-right--reset-md': i === 1 }"
        >
          <lazy-ui-headline-small :data="item.title" />
          <cv-collection-link
            :data="{ collectionType: item.collectionType, link }"
          />
        </div>
        <div
          class="grid-c-md-12 grid-c-8"
          :class="{ 'grid-revert grid-revert--reset-md': i === 1 }"
        >
          <cv-collection-item
            :headlines="item.tabelHeadlines"
            :items="item.itemsCollection.items"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CVCollections",
  props: {
    data: {
      type: Array as () => NCVCollection.ICVCollection[],
      default: null,
    },
    link: {
      type: Object,
      default: null,
    },
  },
});
</script>
