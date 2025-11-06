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
defineProps<{
  data: NHeader.IHeaderData;
}>();

const { gsap } = useGsap();

const isMenuActive = ref(false);
const isUXOptimized = ref(false);
const optimizedMenu = useTemplateRef('optimizedMenu');
const menuIcon = useTemplateRef('menuIcon');
const ease = 'power4.out';
const duration = 0.8;
const durationMedium = 1;
const stagger = 0.03;

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    if (!isDevices()) {
      setTimeout(() => {
        handleScroll();
      }, 2600);
    }
    setTimeout(() => {
      isMenuActive.value = false;
      handleToggleItem();
    }, 1000);
  }
);

watch(
  () => route.fullPath,
  () => {
    if (!isDevices()) {
      setTimeout(() => {
        handleScroll();
      }, 2600);
    }
    setTimeout(() => {
      isMenuActive.value = false;
      handleToggleItem();
    }, 1000);
  }
);
watch(
  () => isUXOptimized.value,
  (newVal) => {
    handleMenuIcon(newVal);
    handleMenuList(newVal);
  }
);
const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
  handleToggleItem();
};
const resize = () => {
  window.addEventListener('resize', handleOptimized);
};
const isDevices = () => {
  return !!window.matchMedia('(max-width: 768px)').matches;
};
const handleOptimized = () => {
  isDevices() ? (isUXOptimized.value = true) : (isUXOptimized.value = false);
};
/// MENU ICON
const handleMenuIcon = (isOptimized: boolean = false) => {
  const tl = gsap.timeline({
    defaults: { duration: duration, ease: ease },
  });
  if (isOptimized) {
    tl.to(menuIcon, {
      yPercent: -40,
      opacity: 0,
      autoAlpha: 0,
    });
  } else {
    tl.to(menuIcon, {
      yPercent: 0,
      opacity: 1,
      autoAlpha: 1,
    });
  }
};

const handleToggleItem = () => {
  const gsapTL = gsap.timeline({
    defaults: { duration: duration, ease: ease },
  });

  if (isMenuActive.value) {
    gsapTL.fromTo(
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
  } else {
    gsapTL.to(optimizedMenu, {
      autoAlpha: 0,
      scale: 0.6,
    });
  }
};

const handleMenuList = (isOptimized: boolean = false) => {
  const mainMenu = optimizedMenu.value as HTMLElement;
  const menuItems = mainMenu.querySelectorAll('[data-main-menu-item]');
  const tl = gsap.timeline({
    defaults: { duration: duration, ease: ease },
  });
  if (isOptimized) {
    tl.to(menuItems, {
      yPercent: -40,
      opacity: 0,
      stagger: stagger,
      autoAlpha: 0,
    });
  } else {
    tl.to(menuItems, {
      yPercent: 0,
      opacity: 1,
      stagger: -stagger,
      autoAlpha: 1,
    });
  }
};

const handleScroll = () => {
  const smoothWrap = document.querySelector('.smooth-container') as HTMLElement;
  console.log('smoothWrap', smoothWrap);

  const smoothScroll = Scrollbar.get(smoothWrap);

  const myListener = () => {
    smoothScroll!.addListener((status) => {
      if (isMenuActive.value) {
        isMenuActive.value = false;
        handleToggleItem();
      }
      status.offset.y > 290
        ? (isUXOptimized.value = true)
        : (isUXOptimized.value = false);
    });
  };
  myListener();
};

onMounted(() => {
  resize();
  if (!isDevices()) {
    setTimeout(() => {
      handleScroll();
      handleMenuIcon();
    }, 1200);
  }
  handleOptimized();
});
</script>
<style lang="scss" src="./siteHeader.scss" scoped></style>
<style lang="scss" src="./siteHeaderControl.scss" scoped></style>
