<template>
  <div class="accordion">
    <div class="grid-w">
      <section v-for="(item, i) in data" :key="i" class="grid-r">
        <div class="grid-c-12">
          <lazy-ui-headline-small :data="item.title" />
        </div>
        <div class="grid-c-12">
          <accordion-item
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
  name: "AccordionComponent",
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
