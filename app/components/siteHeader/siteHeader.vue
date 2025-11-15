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
          <div ref="menuButton" class="header__menu-icon" @click="toggleMenu">
            <button type="button">menu</button>
          </div>
          <ul ref="mainMenu" class="reset-ul header__menu">
            <li
              v-for="(item, index) in data.menu.items"
              :key="index"
              data-main-menu-item
              ref="menuItemsList"
            >
              <nuxt-link
                :to="item.slug === '/' ? '/' : `/${item.slug}`"
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
              <div>
                <nuxt-link
                  :to="item.slug === '/' ? '/' : `/${item.slug}`"
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
defineProps<{
  data: NHeader.IHeaderData;
}>();
const { gsap } = useGsap();
const { isDevices } = useIsDevices();
const { scrollTop } = useSmoothScroll();
const isMenuActive = ref(false);
const optimizedMenu = useTemplateRef('optimizedMenu');
const menuButton = useTemplateRef('menuButton');
const menuItemsList = useTemplateRef('menuItemsList');
const ease = 'power4.out';
const duration = 0.8;
const stagger = 0.03;
const route = useRoute();
// Method to toggle menu
const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};

/// Menu button animation and visible control
const handleMenuButton = () => {
  const tl = gsap.timeline({
    defaults: { duration: duration, ease: ease },
  });

  const show = () => {
    tl.to(menuButton.value, {
      yPercent: 0,
      opacity: 1,
      autoAlpha: 1,
    });
  };
  const hide = () => {
    tl.to(menuButton.value, {
      yPercent: -40,
      opacity: 0,
      autoAlpha: 0,
    });
  };
  return { show, hide };
};

// Handle menu that pops up
const handleToggleItem = () => {
  const tl = gsap.timeline({
    defaults: { duration: duration, ease: ease },
  });

  const show = () => {
    tl.fromTo(
      optimizedMenu.value,
      {
        autoAlpha: 0,
        scale: 0.6,
      },
      {
        autoAlpha: 1,
        scale: 1,
      }
    );
  };

  const hide = () => {
    tl.to(optimizedMenu.value, {
      autoAlpha: 0,
      scale: 0.6,
    });
  };
  return { show, hide };
};

const handleMenuList = () => {
  const menuItems = menuItemsList.value;
  const tl = gsap.timeline({
    defaults: { duration: duration, ease: ease },
  });
  const show = () => {
    tl.to(menuItems, {
      yPercent: 0,
      opacity: 1,
      stagger: -stagger,
      autoAlpha: 1,
    });
  };
  const hide = () => {
    tl.to(menuItems, {
      yPercent: -40,
      opacity: 0,
      stagger: stagger,
      autoAlpha: 0,
    });
  };

  return { show, hide };
};
// watch on menu active
watch(isMenuActive, (active) => handleToggleItem()[active ? 'show' : 'hide']());

// watch on scroll to hide/show menu button
watch(scrollTop, (scrolled) => {
  handleMenuButton()[scrolled > 290 ? 'show' : 'hide']();
  handleMenuList()[scrolled > 290 ? 'hide' : 'show']();
  isMenuActive.value = false;
});

// watch on route change to hide menu
watch(route, () => {
  isMenuActive.value = false;
  handleMenuButton()[!isDevices.value ? 'hide' : 'show']();
  handleMenuList()[!isDevices.value ? 'show' : 'hide']();
});

onMounted(() => {
  handleMenuButton()[!isDevices.value ? 'hide' : 'show']();
});
</script>
<style lang="scss" src="./siteHeader.scss" scoped></style>
<style lang="scss" src="./siteHeaderControl.scss" scoped></style>
