<template>
  <div class="cv-collections">
    <section v-for="(item, i) in data" :key="i">
      <div>
        {{ item.collectionType }}
      </div>
      <lazy-ui-headline-small :data="item.title" />
      <div>
        {{ item.tabelHeadlines }}
      </div>
      <div>
        {{ item.itemsCollection }}
      </div>
    </section>
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
  },
});
</script>
<style lang="scss" src="./cvCollections.scss" scoped></style>
