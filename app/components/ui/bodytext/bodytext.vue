/* eslint-disable vue/no-v-html */
<template>
  <div
    v-html="toHtmlString(data.json)"
    data-split-line-effect-bodytext
    class="bodytext"
  ></div>
</template>

<script setup lang="ts">
// @ts-ignore
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

defineProps<{
  data: any;
}>();

const toHtmlString = (content: any) => {
  return documentToHtmlString(content);
};
</script>
<style lang="scss" src="./bodytext.scss" scoped></style>
