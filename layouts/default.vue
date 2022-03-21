<template>
  <div class="app">
    <transition appear :css="false" @appear="customBeforeAppear">
      <div class="app-init-effect">
        <span class="app-init-effect__text-wrap">
          <span class="app-init-effect__text" data-init-text-first> Actor</span>
        </span>
        <span class="app-init-effect__text-wrap">
          <span class="app-init-effect__text"> Morten</span></span
        >
        <span class="app-init-effect__text-wrap">
          <span class="app-init-effect__text"> Glad</span>
        </span>
      </div>
    </transition>
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
      ease: "power4.out",
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
  methods: {
    customBeforeAppear() {
      const SplitText = this.$SplitText;
      const gsap = this.$gsap as NLib.IGsap;
      const target = document.querySelector(
        "[data-init-text-first]"
      ) as HTMLElement;

      const tl = gsap.timeline();
      // @ts-ignore
      const mySplitText = new SplitText(target, { type: "chars" });
      const chars = mySplitText.chars;

      tl.fromTo(
        chars,
        { opacity: 0, x: -80, fontWeight: 100 },
        {
          fontWeight: 400,
          x: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.05,
          ease: this.ease,
        }
      ).to(chars, {
        fontWeight: 100,
        x: 80,
        opacity: 0,
        duration: 1.2,
        stagger: -0.05,
        ease: this.ease,
      });
    },
  },
});
</script>
