<template>
  <header class="header">
    <div class="liquidGlass-effect"></div>
    <div class="liquidGlass-tint"></div>
    <div class="liquidGlass-shine"></div>
    <div class="liquidGlass-text">
      <div class="dock">
        <div class="grid-w">
          <div class="grid-r no-gap">
            <div class="grid-c-4" data-split-line-effect>
              <nuxt-link v-if="data.logo" class="header__logo" :to="'/'">
                {{ data.logo }} |
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
    </div>
  </header>
  <nuxt-icon name="glass" />
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
        '.header__menu-item-inner'
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
<style lang="scss">
.header {
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  height: $header-height;
  z-index: 10;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.15);
  border-radius: 1.6rem;
  .grid-w {
    width: 50rem;
  }
  &__logo {
    @include font-main;
    font-weight: 700;
    color: var(--color-secondary);
    font-size: clamp(1.4rem, 1.3vw, 1.5rem);
    display: block;
    padding: 1.3rem 2rem;
  }

  &__menu li {
    display: inline-block;
    padding-top: 0.6rem;
  }

  &__menu-item {
    display: block;
    padding: 0.6rem 0;
    height: 1.8rem;
    white-space: nowrap;
    // active link
    &.nuxt-link-exact-active .header__menu-item-inner span {
      @include font-main-bold;
    }
    &.is-medium-string .header__menu-item-inner span {
      transition: transform 0.4s $transition--cubic,
        font-weight $transition--slow, opacity $transition--slow;
    }
  }
  &__menu-item-inner {
    overflow: hidden;
    position: absolute;
  }
  &__menu-item-inner span {
    color: var(--color-secondary);
    font-size: 1.4rem;
    @include font-main;
    display: inline-block;
    transition: transform 0.48s $transition--cubic,
      font-weight $transition--slow, opacity $transition--slow;
    will-change: transform, font-weight;
  }
}

// hover effect
@include viewport-mouse {
  .header__menu-item-inner:first-child,
  .header__menu-item-inner:last-child {
    @for $i from 1 through 10 {
      span:nth-child(#{$i}n) {
        transition-delay: #{$i * 0.035}s;
      }
    }
  }
  .header__menu-item.is-medium-string .header__menu-item-inner {
    @for $i from 1 through 10 {
      span:nth-child(#{$i}n) {
        transition-delay: #{$i * 0.023}s;
      }
    }
  }

  // first menu items
  .header__menu-item-inner:first-child {
    span {
      opacity: 0;
      transform: translateY(-105%);
    }
  }
  // second menu item
  .header__menu-item-inner:last-child {
    span {
      transform: translateY(0);
    }
  }
  // HOVER
  .header__menu-item:hover {
    .header__menu-item-inner:first-child {
      span {
        opacity: 1;
        transform: translateY(0);
        font-weight: 700;
      }
    }
    .header__menu-item-inner:last-child {
      span {
        opacity: 0;
        transform: translateY(100%);
        transition: transform 0.22s $transition--cubic,
          font-weight $transition--slow, opacity $transition--slow;
      }
    }
    .header__menu-item.is-medium-string .header__menu-item-inner:last-child {
      span {
        transition: transform 0.12s $transition--cubic,
          font-weight $transition--slow, opacity $transition--slow;
      }
    }
  }
}

.liquidGlass-effect {
  position: absolute;
  z-index: 0;
  inset: 0;
  backdrop-filter: blur(3px);
  overflow: hidden;
  isolation: isolate;
}

.liquidGlass-tint {
  z-index: 1;
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
}

.liquidGlass-shine {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  box-shadow: inset 2px 2px 1px 0 rgba(255, 255, 255, 0.05),
    inset -1px -1px 1px 1px rgba(255, 255, 255, 0.05);
}

.liquidGlass-text {
  z-index: 3;
}
</style>
