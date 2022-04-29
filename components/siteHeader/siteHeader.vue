<template>
  <header
    class="header flex-vertical-center"
    :class="{ ' is-ux-optimized ': isUXOptimized }"
  >
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-4">
          <nuxt-link
            v-if="data.logo"
            class="header__logo"
            :to="'/'"
            data-split-line-effect
          >
            {{ data.logo }}
          </nuxt-link>
        </div>
        <div class="grid-c-8 flex-end" data-inview-simple-show-effect>
          <button type="button" class="header__menu-icon" @click="toggleMenu">
            Menu
          </button>
          <ul
            class="reset-ul header__menu"
            :class="{ 'is-active': isMenuActive }"
          >
            <li v-for="(item, index) in data.menu.items" :key="index">
              <nuxt-link
                :to="item.slug === '/' ? '/' : `/${item.slug}/`"
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
  data() {
    return {
      isMenuActive: false,
      isUXOptimized: false,
    };
  },
  // watch on route changes
  watch: {
    $route() {
      this.isMenuActive = false;
    },
  },
  mounted() {
    this.resize();
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
    this.handleOptimized();
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    resize() {
      window.addEventListener("resize", this.handleOptimized);
    },
    isDevices() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        return true;
      } else {
        return false;
      }
    },
    handleOptimized() {
      this.isDevices()
        ? (this.isUXOptimized = true)
        : (this.isUXOptimized = false);
    },
    handleScroll() {
      if (!this.isDevices()) {
        const scrollTop =
          window.pageYOffset ||
          (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
        scrollTop > 290
          ? (this.isUXOptimized = true)
          : (this.isUXOptimized = false);
      }
    },
  },
});
</script>
<style lang="scss" src="./siteHeader.scss" scoped></style>
<style lang="scss" src="./siteHeaderControl.scss" scoped></style>
