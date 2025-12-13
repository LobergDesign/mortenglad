<template>
  <header>
    <nuxt-link v-if="data.logo" :to="'/'">
      {{ data.logo }}
    </nuxt-link>
    <ul>
      <li v-for="(item, index) in data.menu.items" :key="index">
        <nuxt-link :to="item.slug === '/' ? '/' : `/${item.slug}`">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  data: NHeader.IHeaderData;
}>();
</script>
