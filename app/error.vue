<template>
  <main v-if="!pending">
    <hero
      v-if="data.globalSettings.pageNotFoundTitle"
      :title="data.globalSettings.pageNotFoundTitle"
      isMedium
    />
    <div class="grid-w spacing-b">
      <div class="grid-r">
        <div class="grid-c-8 grid-sm-12">
          <div v-if="data.globalSettings.pageNotFoundBodytext">
            <ui-bodytext :data="data.globalSettings.pageNotFoundBodytext" />
            <ui-link
              :data="{ linktext: 'Go to frontpage', link: { slug: '/' } }"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts" setup>
const { data, pending } = await useGlobaleSettings();
</script>
