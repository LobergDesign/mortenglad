<template>
  <main v-if="!$fetchState.pending">
    <hero v-if="data.pageNotFoundTitle" :title="data.pageNotFoundTitle" />
    <div class="grid-w spacing-b">
      <div class="grid-r">
        <div class="grid-c-8 grid-sm-12">
          <div v-if="data.pageNotFoundBodytext">
            <ui-bodytext :data="data.pageNotFoundBodytext" />
            <ui-link
              :data="{ linktext: 'Go to frontpage', link: { slug: '/' } }"
            />
          </div>
        </div>
      </div>
    </div>

    <pre></pre>
  </main>
</template>
<script lang="ts" setup>
const data = ref<NGlobalData.IGlobalData>();

useAsyncData(async () => {
  //  const globalData = this.$store.state.global.globalSettings;
  //   if (globalData) {
  //     this.data = {
  //       pageNotFoundTitle: globalData.globalSettings.pageNotFoundTitle,
  //       pageNotFoundBodytext: globalData.globalSettings.pageNotFoundBodytext,
  //     };
  //   }
});
</script>
