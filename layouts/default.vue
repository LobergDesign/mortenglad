<template>
  <div class="app">
    <transition appear :css="false" @appear="customBeforeAppear">
      <div class="app-init-effect" data-init-effect-bg>
        <span class="app-init-effect__text-wrap" data-init-text>
          <span class="app-init-effect__text">Morten Glad </span></span
        >
        <span class="app-init-effect__text-wrap" data-init-small-text>
          <span class="app-init-effect__text app-init-effect__text--small-cta">
            Actor</span
          ></span
        >
      </div>
    </transition>

    <site-header v-if="!$fetchState.pending" :data="header" />
    <main>
      <Nuxt />
      <circle-effect />
    </main>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "MainLayout",
  data() {
    return {
      header: {},
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
      this.header = header;
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
          duration: 3,
          ease: this.ease,
          backgroundColor: this.dark,
          onComplete: initApp,
        }
      ).to(target, {
        delay: 0.6,
        autoAlpha: 0,
      });
    },
    textAnimation() {
      const SplitText = this.$SplitText;
      const gsap = this.$gsap as NLib.IGsap;
      const target = document.querySelector("[data-init-text]");
      const targetSmall = document.querySelector("[data-init-small-text]");

      const mySplitText = new SplitText(target, { type: "chars" });
      const mySplitTextSmall = new SplitText(targetSmall, { type: "chars" });
      const chars = mySplitText.chars;
      const charsSmall = mySplitTextSmall.chars;
      gsap.timeline().to(target, {
        duration: 0,
        autoAlpha: 1,
      });
      gsap.timeline().to(targetSmall, {
        duration: 0,
        autoAlpha: 1,
      });

      gsap
        .timeline({
          defaults: { ease: this.ease, stagger: -0.05 },
        })
        .fromTo(
          charsSmall,
          { opacity: 0, x: -180, fontWeight: 100 },
          {
            duration: 2.1,
            fontWeight: 300,
            x: 0,
            opacity: 1,
            autoAlpha: 1,
          }
        )
        .to(charsSmall, {
          delay: 0.5,
          duration: 2,
          fontWeight: 100,
          x: 120,
          opacity: 0,
        });

      gsap
        .timeline({
          defaults: { ease: this.ease, stagger: -0.05 },
        })
        .fromTo(
          chars,
          { opacity: 0, x: -260, fontWeight: 100, color: this.dark },
          {
            delay: 0.6,
            duration: 2,
            fontWeight: 400,
            x: 0,
            opacity: 1,
            color: this.light,
            autoAlpha: 1,
          }
        )
        .to(chars, {
          duration: 1.8,
          fontWeight: 100,
          x: 150,
          opacity: 0,
        });
    },
    customBeforeAppear() {
      this.bgAnimation();
      this.textAnimation();
    },
  },
});
</script>
