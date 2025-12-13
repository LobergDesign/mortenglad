<template>
  <header class="header-devices">
    <div class="grid-w">
      <div class="grid-r no-gap">
        <div class="grid-c-4" data-split-line-effect>
          <nuxt-link v-if="data.logo" class="header-devices__logo" :to="'/'">
            {{ data.logo }}
          </nuxt-link>
        </div>
        <div class="grid-c-8 place-c-r">
          <button
            type="button"
            class="header-devices__menu-toggle"
            @click="toggleMenu"
          >
            <div class="liquidGlass-effect"></div>
            <div class="liquidGlass-tint"></div>
            <div class="liquidGlass-text">menu</div>
          </button>
          <div class="header-devices__menu" ref="menuToggleContent">
            <div class="liquidGlass-effect"></div>
            <div class="liquidGlass-tint"></div>
            <div class="liquidGlass-text">
              <ul class="reset-ul">
                <li v-for="(item, index) in data.menu.items" :key="index">
                  <nuxt-link
                    :to="item.slug === '/' ? '/' : `/${item.slug}`"
                    class="header-devices__menu-item"
                  >
                    {{ item.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
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
const menuToggleContent = useTemplateRef('menuToggleContent');
const route = useRoute();
let tl: gsap.core.Timeline;

const toggleMenu = () => tl.reversed(!tl.reversed());

onMounted(() => {
  // Create the timeline once
  tl = gsap.timeline({ paused: true }).fromTo(
    menuToggleContent.value,
    { autoAlpha: 0, scale: 0.6 },
    {
      autoAlpha: 1,
      scale: 1,
      duration: 0.3,
      ease: 'power4.out',
    },
  );
  tl.reverse();
});

//  close the menu when the route changes
watch(
  () => route.fullPath,
  () => {
    if (!tl.reversed()) tl.reverse();
  },
);
</script>
<style lang="scss" src="./siteHeaderDevices.scss" scoped></style>
<style lang="scss" src="./glassEffect.scss" scoped></style>
