<template>
  <div class="app">
    <transition appear :css="false" @appear="customBeforeAppear">
      <div class="app-init-effect" data-init-effect-bg>
        <span class="app-init-effect__text-wrap" data-init-text>
          <span class="app-init-effect__text">Morten Glad </span></span
        >
        <span class="app-init-effect__text-wrap" data-init-text>
          <span class="app-init-effect__text app-init-effect__text--small-cta">
            Actor</span
          ></span
        >
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
      dark: "#151515",
      light: "#e9f1f7",
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
    bgAnimation() {
      const initApp = () => {
        this.$store.commit("global/initApplication");
      };
      const gsap = this.$gsap as NLib.IGsap;
      const tl = gsap.timeline();
      const target = document.querySelector("[data-init-effect-bg]");
      tl.fromTo(
        target,
        { backgroundColor: this.light },
        {
          duration: 2.5,
          ease: this.ease,
          backgroundColor: this.dark,
          onComplete: initApp,
        }
      ).to(target, {
        autoAlpha: 0,
      });
    },
    textAnimation() {
      const SplitText = this.$SplitText;
      const gsap = this.$gsap as NLib.IGsap;
      const target = document.querySelectorAll("[data-init-text]") as NodeList;
      const tl = gsap.timeline();
      // @ts-ignore
      const mySplitText = new SplitText(target, { type: "chars" });
      const chars = mySplitText.chars;
      tl.to(target, {
        duration: 0,
        autoAlpha: 1,
      });

      tl.fromTo(
        chars,
        { opacity: 0, x: 110, fontWeight: 100, color: this.dark },
        {
          fontWeight: 400,
          x: 0,
          opacity: 1,
          duration: 1.3,
          stagger: 0.05,
          color: this.light,
          ease: this.ease,
          autoAlpha: 1,
        }
      ).to(chars, {
        fontWeight: 100,
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: -0.05,
        ease: this.ease,
      });
    },
    customBeforeAppear() {
      this.bgAnimation();
      this.textAnimation();
    },
  },
});
</script>
