<template>
  <div class="grid-w">
    <div class="grid-r">
      <div class="grid-c-8-offset-2 grid-remove-offset-sm">
        <ui-headline-medium v-if="data.title" :data="data.title" />
        <ui-bodytext v-if="data.bodytext" :data="data.bodytext" />
        <ui-link
          v-if="data.linkToInternalPage"
          :data="{
            link: data.linkToInternalPage,
            linktext: data.linkTextToInternalPage,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GridTextArea",
  props: {
    data: {
      type: Object as () => NGrid.IGridTextArea,
      default: null,
    },
  },
});
</script>
