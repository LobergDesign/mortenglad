<template>
  <div class="cv-collection-item spacing-b">
    <!-- IF THERE IS 4 HEADLINES -->
    <template v-if="headlines.length === 4">
      <div class="grid-r last-text-align-right cv-collection-item__title-list">
        <div class="grid-c-3">
          <span class="cv-collection-item__title">
            {{ headlines[0] }}
          </span>
        </div>
        <div class="grid-c-5">
          <span class="cv-collection-item__title">
            {{ headlines[1] }}
          </span>
        </div>
        <div class="grid-c-3">
          <span class="cv-collection-item__title">
            {{ headlines[2] }}
          </span>
        </div>
        <div class="grid-c-1">
          <span class="cv-collection-item__title">
            {{ headlines[3] }}
          </span>
        </div>
      </div>
      <ul class="reset-ul">
        <li v-for="(item, i) in items" :key="i">
          <lazy-cv-collection-nested-item
            :data="item"
            :len="headlines.length"
          />
        </li>
      </ul>
    </template>
    <!-- IF THERE IS 3 HEADLINES -->
    <template v-if="headlines.length === 3">
      <div class="grid-r">
        <div
          v-for="(headline, index) in headlines"
          :key="index"
          class="grid-c-4"
        >
          {{ headline }}
        </div>
      </div>
    </template>
    <!-- IF THERE IS 2 HEADLINES -->
    <template v-if="headlines.length === 2">
      <div v-if="headlines.length === 2" class="grid-r">
        <div
          v-for="(headline, index) in headlines"
          :key="index"
          class="grid-c-4"
        >
          {{ headline }}
        </div>
      </div>
    </template>
    <!-- <pre>
     {{ items }}
   </pre
    > -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CvCollectionItem",
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
<style lang="scss" src="./cvCollectionItem.scss" scoped></style>
