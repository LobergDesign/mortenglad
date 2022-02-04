<template>
  <ul class="grid-r reset-ul cv-collection-nested-list last-text-align-right">
    <template v-if="len === 4">
      <li class="grid-c-3">
        <span class="cv-collection-nested-list__item">
          {{ data.type }}
        </span>
      </li>
      <li class="grid-c-5">
        <span class="cv-collection-nested-list__item">
          {{ data.production }}
        </span>
      </li>
      <li class="grid-c-3">
        <span class="cv-collection-nested-list__item">
          {{ data.role }}
        </span>
      </li>
      <li class="grid-c-1">
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
  },
});
</script>
<style lang="scss" src="./cvCollectionNestedItem.scss" scoped></style>
