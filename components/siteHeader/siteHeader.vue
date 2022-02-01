<template>
  <header class="header flex-vertical-center">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-4">
          <nuxt-link v-if="data.logo" class="header__logo" :to="'/'">
            {{ data.logo }}
          </nuxt-link>
        </div>
        <div class="grid-c-8 flex-end">
          <ul class="reset-ul header__menu">
            <li v-for="(item, index) in data.menu.items" :key="index">
              <nuxt-link
                :to="item.slug"
                class="header__menu-item"
                :class="{ 'is-medium-string': item.title.length > 4 }"
              >
                <span class="header__menu-item-inner">
                  <span v-for="(char, i) in item.title" :key="i">{{
                    char
                  }}</span>
                </span>
                <span class="header__menu-item-inner">
                  <span v-for="(char, i) in item.title" :key="i">{{
                    char
                  }}</span>
                </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SiteHeader",
  props: {
    data: {
      type: Object as () => NHeader.IHeaderData,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./siteHeader.scss" scoped></style>
