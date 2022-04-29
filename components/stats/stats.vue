<template>
  <div class="stats spacing-b">
    <div class="grid-w">
      <div class="grid-r">
        <div
          class="grid-c-5 grid-c-sm-12 text-center"
          data-inview-simple-show-effect
        >
          <man class="stats__icon" />
        </div>
        <div class="grid-c-7 grid-c-sm-12">
          <ul class="reset-ul grid-r" data-inview-simple-show-effect>
            <li
              v-for="(item, i) in profileCollection.items"
              :key="i"
              class="grid-c-6"
            >
              <div class="stats__item">
                <span v-if="item.title" class="stats__title">
                  {{ item.title }}
                </span>
                <span v-if="item.value" class="stats__item-value">
                  {{ item.value }}
                </span>
              </div>
            </li>
          </ul>
          <ul
            class="reset-ul grid-r stats__list"
            data-inview-simple-show-effect
          >
            <li
              v-for="(item, i) in profileAdditionalCollection.items"
              :key="i"
              class="grid-c-4 grid-c-sm-6"
            >
              <div class="stats__list-item">
                <span
                  v-if="item.title"
                  class="stats__title stats__title--small"
                >
                  {{ item.title }}
                </span>
                <ul v-if="item.list" class="reset-ul">
                  <li v-for="(listItem, index) in item.list" :key="index">
                    <span class="stats__list-value">
                      {{ listItem }}
                    </span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Man from "~/assets/svg/man.svg?inline";

export default Vue.extend({
  name: "StatsComponent",
  components: {
    man: Man,
  },
  props: {
    profileCollection: {
      type: Object as () => NStats.IProfileCollection,
      default: null,
    },
    profileAdditionalCollection: {
      type: Object as () => NStats.IProfileAdditionalCollection,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./stats.scss" scoped></style>
