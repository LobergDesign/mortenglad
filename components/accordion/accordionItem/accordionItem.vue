<template>
  <div class="accordion-item">
    <!-- IF THERE IS 4 HEADLINES -->
    <template v-if="headlines.length <= 4">
      <div class="grid-r last-text-align-right accordion-item__title-list">
        <div v-if="headlines.length > 0" class="grid-c-3 hide-mobile">
          <span class="accordion-item__title">
            {{ headlines[0] }}
          </span>
        </div>
        <div v-if="headlines.length > 1" class="grid-c-5 hide-mobile">
          <span class="accordion-item__title">
            {{ headlines[1] }}
          </span>
        </div>
        <div v-if="headlines.length > 2" class="grid-c-3 hide-mobile">
          <span class="accordion-item__title">
            {{ headlines[2] }}
          </span>
        </div>
        <div v-if="headlines.length > 3" class="grid-c-1 hide-mobile">
          <span class="accordion-item__title">
            {{ headlines[3] }}
          </span>
        </div>
      </div>
      <ul class="reset-ul">
        <li v-for="(item, i) in items" :key="i">
          <accordion-nested-item
            :data="item"
            :len="headlines.length"
            :headlines="headlines"
          />
        </li>
      </ul>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AccordionItem",
  props: {
    headlines: {
      type: Array,
      default: null,
    },
    items: {
      type: Array as () => NCVCollection.ICVSingleCollection[],
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./accordionItem.scss" scoped></style>
