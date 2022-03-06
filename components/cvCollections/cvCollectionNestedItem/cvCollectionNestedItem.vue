<template>
  <ul
    class="grid-r reset-ul cv-collection-nested-list last-text-align-right reset-align-xs"
  >
    <template v-if="len <= 4">
      <li class="grid-c-xs-6 grid-c-3">
        <span class="cv-collection-nested-list__item-headline mobile-only">
          {{ headlines[0] }}
        </span>
        <span class="cv-collection-nested-list__item">
          <template v-if="data.type">
            {{ data.type }}
          </template>
          <template v-else-if="data.educationcourse">
            {{ data.educationcourse }}
          </template>
          <template v-else-if="data.workshop">
            {{ data.workshop }}
          </template>
        </span>
      </li>
      <li class="grid-c-xs-6 grid-c-5">
        <span class="cv-collection-nested-list__item-headline mobile-only">
          {{ headlines[1] }}
        </span>
        <span class="cv-collection-nested-list__item">
          <template v-if="data.production">
            {{ data.production }}
          </template>
          <template v-else-if="data.place">
            {{ data.place }}
          </template>
        </span>
      </li>
      <li class="grid-c-xs-6 grid-c-3">
        <span class="cv-collection-nested-list__item-headline mobile-only">
          {{ headlines[2] }}
        </span>
        <span class="cv-collection-nested-list__item">
          <template v-if="data.role">
            {{ data.role }}
          </template>
          <template v-else-if="data.city">
            {{ data.city }}
          </template>
        </span>
      </li>
      <li class="grid-c-xs-6 grid-c-1">
        <span class="cv-collection-nested-list__item-headline mobile-only">
          {{ headlines[3] }}
        </span>
        <span class="cv-collection-nested-list__item">
          {{ data.year }}
        </span>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CvCollectionItem",
  props: {
    data: {
      type: Object as () => NCVCollection.ICVSingleCollection,
      default: null,
    },
    len: {
      type: Number,
      default: null,
    },
    headlines: {
      type: Array,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./cvCollectionNestedItem.scss" scoped></style>
