<template>
  <div
    v-html="sanitizedHtml"
    data-split-line-effect-bodytext
    class="bodytext"
  ></div>
</template>

<script setup lang="ts">
// @ts-ignore
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const props = defineProps<{
  data: any;
}>();

const nuxtApp = useNuxtApp();

const sanitizedHtml = computed(() => {
  const rawHtml = documentToHtmlString(props.data.json);
  // Only sanitize on client side where $sanitize is available
  if (nuxtApp.$sanitize) {
    return nuxtApp.$sanitize(rawHtml);
  }
  // On server, return raw HTML (will be sanitized on client hydration)
  return rawHtml;
});
</script>
