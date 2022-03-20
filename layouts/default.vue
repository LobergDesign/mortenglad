<template>
  <div class="app">
    <site-header v-if="!$fetchState.pending" :data="header" />
    <main>
      <Nuxt />
    </main>

    <site-footer v-if="!$fetchState.pending" :data="footer" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MainLayout",
  data() {
    return {
      header: {},
      footer: {},
    };
  },

  async fetch() {
    await this.$store.dispatch("global/fetchGlobalSettings");
    const globalData = this.$store.state.global.globalSettings;

    if (globalData) {
      const header = {
        menu: globalData.globalSettings?.mainMenuCollection,
        logo: globalData.globalSettings?.headerLogo,
      };
      const footer = {
        telephonenumber: globalData.globalSettings?.telephonenumber,
        email: globalData.globalSettings?.email,
        address: globalData.globalSettings?.address,
        linkedIn: globalData.globalSettings?.linkedIn,
        facebook: globalData.globalSettings?.facebook,
        instagram: globalData.globalSettings?.instagram,
        youtube: globalData.globalSettings?.youtube,
        contactFormTitle: globalData.globalSettings?.contactFormTitle,
        contactFormSuccessMessage:
          globalData.globalSettings?.contactFormSuccessMessage,
      };
      this.header = header;
      this.footer = footer;
    }
  },
});
</script>
