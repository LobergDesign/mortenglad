<template>
  <header class="header">
    <div class="liquidGlass-effect"></div>
    <div class="liquidGlass-tint"></div>
    <div class="liquidGlass-text">
      <div class="grid-w">
        <div class="grid-r no-gap">
          <div class="grid-c-4">
            <nuxt-link v-if="data.logo" class="header__logo" :to="'/'">
              {{ data.logo }}
            </nuxt-link>
          </div>
          <div class="grid-c-8">
            <ul ref="mainMenu" class="reset-ul header__menu">
              <li
                v-for="(item, index) in data.menu.items"
                :key="index"
                data-main-menu-item
                ref="menuItemsList"
              >
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
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  data: NHeader.IHeaderData;
}>();
const menuItems = useTemplateRef<HTMLLinkElement[]>('menuItemsList');

const setWidth = () => {
  if (menuItems.value) {
    menuItems.value.forEach((item) => {
      const childElm: HTMLElement | null = item.querySelector(
        '.header__menu-item-inner',
      );
      const spacing = 20;
      const itemWidth = childElm?.offsetWidth;
      if (!itemWidth) return;
      item.style.width = `${itemWidth + spacing}px`;
    });
  }
};

onMounted(async () => {
  await nextTick();
  setWidth();
});
</script>
<style lang="scss" src="./siteHeader.scss" scoped></style>
<style lang="scss" src="./glassEffect.scss" scoped></style>
