<template>
  <div class="accordion">
    <div v-if="data" class="grid-w">
      <section
        v-for="(item, i) in data"
        :id="item.collectionType"
        :key="i"
        class="grid-r spacing-b"
      >
        <div
          :class="[
            { 'text-right text-right--reset-md': i === 1 && alternative },
            alternative ? 'grid-c-md-12 grid-c-3' : 'grid-c-12',
          ]"
        >
          <lazy-ui-headline-small v-if="alternative" :data="item.title" />
          <lazy-ui-headline-medium v-else :data="item.title" />
        </div>
        <div
          :class="[
            { 'grid-revert grid-revert--reset-md': i === 1 && alternative },
            alternative ? 'grid-c-md-12 grid-c-9' : 'grid-c-12',
          ]"
          data-inview-simple-show-effect
        >
          <accordion-item
            :headlines="item.tabelHeadlines"
            :items="item.itemsCollection.items"
          />
          <nuxt-link
            v-if="alternative && link"
            class="spacing-t-small display-block"
            :to="link.cvLink.slug + '/'"
          >
            <template v-if="link.cvLinkText">
              {{ link.cvLinkText }}
            </template>
            <template v-else> Go to my {{ link.cvLink.title }} page </template>
          </nuxt-link>
        </div>
        <div class="grid-c-md-12 grid-c-9"></div>
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
    alternative: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Object,
      default: null,
    },
  },
});
</script>
