<template>
  <header class="header flex-vertical-center">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-4" data-split-line-effect>
          <nuxt-link v-if="data.logo" class="header__logo" :to="'/'">
            {{ data.logo }}
          </nuxt-link>
        </div>
        <div class="grid-c-8 flex-end" data-inview-simple-show-effect>
          <div ref="menuIcon" class="header__menu-icon" @click="toggleMenu">
            <button type="button">menu</button>
          </div>

          <ul ref="mainMenu" class="reset-ul header__menu">
            <li
              v-for="(item, index) in data.menu.items"
              :key="index"
              data-main-menu-item
            >
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

          <ul ref="optimizedMenu" class="reset-ul header__menu optimized-menu">
            <li v-for="(item, index) in data.menu.items" :key="index">
              <div data-main-menu-item>
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
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Scrollbar from 'smooth-scrollbar';
export default Vue.extend({
  name: 'SiteHeader',
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
      ease: 'power4.out',
      duration: 0.8,
      durationMedium: 1,
      stagger: 0.03,
    };
  },
  // watch on route changes
  watch: {
    $route() {
      if (!this.isDevices()) {
        setTimeout(() => {
          this.handleScroll();
        }, 2600);
      }
      setTimeout(() => {
        this.isMenuActive = false;
        this.handleToggleItem();
      }, 1000);
    },
    isUXOptimized(isOptimized: boolean) {
      this.handleMenuIcon(isOptimized);
      this.handleMenuList(isOptimized);
    },
  },
  mounted() {
    this.resize();
    if (!this.isDevices()) {
      setTimeout(() => {
        this.handleScroll();
        this.handleMenuIcon();
      }, 1200);
    }
    this.handleOptimized();
  },

  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
      this.handleToggleItem();
    },
    handleToggleItem() {
      const optimizedMenu = this.$refs.optimizedMenu as HTMLElement;
      const gsap = this.$gsap.timeline({
        defaults: { duration: this.duration, ease: this.ease },
      });

      if (this.isMenuActive) {
        gsap.fromTo(
          optimizedMenu,
          {
            autoAlpha: 0,
            scale: 0.6,
          },
          {
            autoAlpha: 1,
            scale: 1,
          }
        );
      } else {
        gsap.to(optimizedMenu, {
          autoAlpha: 0,
          scale: 0.6,
        });
      }
    },
    resize() {
      window.addEventListener('resize', this.handleOptimized);
    },
    isDevices() {
      return !!window.matchMedia('(max-width: 768px)').matches;
    },
    handleOptimized() {
      this.isDevices()
        ? (this.isUXOptimized = true)
        : (this.isUXOptimized = false);
    },
    /// MENU ICON
    handleMenuIcon(isOptimized: boolean = false) {
      const menuIcon = this.$refs.menuIcon as HTMLDivElement;
      const gsap = this.$gsap.timeline({
        defaults: { duration: this.duration, ease: this.ease },
      });

      if (isOptimized) {
        setTimeout(() => {
          gsap.fromTo(
            menuIcon,
            {
              autoAlpha: 0,
              scale: 0.8,
            },
            {
              autoAlpha: 1,
              opacity: 1,
              scale: 1,
            }
          );
        }, 250);
      } else {
        gsap.to(menuIcon, {
          autoAlpha: 0,
          opacity: 0,
          scale: 0.8,
        });
      }
    },
    handleMenuList(isOptimized: boolean = false) {
      const mainMenu = this.$refs.mainMenu as HTMLElement;
      const menuItems = mainMenu.querySelectorAll('[data-main-menu-item]');
      const tl = this.$gsap.timeline({
        defaults: { duration: this.duration, ease: this.ease },
      });
      if (isOptimized) {
        tl.to(menuItems, {
          yPercent: -40,
          opacity: 0,
          stagger: 0.1,
          autoAlpha: 0,
        });
      } else {
        tl.to(menuItems, {
          yPercent: 0,
          opacity: 1,
          stagger: -0.1,
          autoAlpha: 1,
        });
      }
    },
    handleScroll() {
      const smoothWrap = document.querySelector(
        '.smooth-container'
      ) as HTMLElement;
      const smoothScroll = Scrollbar.get(smoothWrap);

      const myListener = () => {
        smoothScroll!.addListener((status) => {
          if (this.isMenuActive) {
            this.isMenuActive = false;
            this.handleToggleItem();
          }
          status.offset.y > 290
            ? (this.isUXOptimized = true)
            : (this.isUXOptimized = false);
        });
      };
      myListener();
    },
  },
});
</script>
<style lang="scss" src="./siteHeader.scss" scoped></style>
<style lang="scss" src="./siteHeaderControl.scss" scoped></style>
