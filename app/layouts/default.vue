<template>
  <div class="app">
    <!-- <Transition appear :css="false">
      <div class="app-init-effect" ref="initEffectBg">
        <span class="app-init-effect__text-wrap" data-init-text>
          <span class="app-init-effect__text">Morten Glad </span></span
        >
        <span class="app-init-effect__text-wrap" data-init-small-text>
          <span class="app-init-effect__text app-init-effect__text--small-cta">
            Actor</span
          ></span
        >
      </div>
    </Transition> -->

    <!-- <site-header
      v-if="!pending && data"
      :data="{
        menu: data.globalSettings.mainMenuCollection,
        logo: data.globalSettings.headerLogo,
      }"
    /> -->
    <new-site-header
      v-if="!pending && data"
      :data="{
        menu: data.globalSettings.mainMenuCollection,
        logo: data.globalSettings.headerLogo,
      }"
    />
    <main>
      <slot />
    </main>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { initSmoothScroll, destroySmoothScroll } = useSmoothScroll();
const { isDevices } = useIsDevices();
onMounted(() => {
  if (!isDevices.value) {
    setTimeout(() => {
      initSmoothScroll();
    }, 1000);
  }
});

watch(
  () => route.path,
  () => {
    if (!isDevices.value) {
      destroySmoothScroll();
      setTimeout(() => {
        initSmoothScroll();
      }, 800);
    }
  }
);

watch(isDevices, (newVal) => {
  if (newVal) {
    destroySmoothScroll();
  } else {
    initSmoothScroll();
  }
});

const visibleRotater = ref(false);

const header = ref();
const initEffectBg = useTemplateRef('initEffectBg');
const ease = 'power4.out';
const dark = '#151515';
const light = '#e9f1f7';
const { gsap, scrollTrigger } = useGsap();
const { data, pending } = await useGlobaleSettings();
const { initApplication } = useAppStatus();

// async fetch() {
//   await this.$store.dispatch('global/fetchGlobalSettings');
//   const globalData = this.$store.state.global.globalSettings;
//   if (globalData) {
//     const header = {
//       menu: globalData.globalSettings?.mainMenuCollection,
//       logo: globalData.globalSettings?.headerLogo,
//     };
//     this.header = header;
//   }
// }

// const route = useRoute();

// watch(
//   () => route.path,
//   () => {
//     setTimeout(() => {
//       controlVisibleRotater();
//     }, 800);
//   }
// );

// const controlVisibleRotater = () => {
//   const isFrontpage = () => route.path === '/';
//   visibleRotater.value = isFrontpage();
// };

// const controleIsDevices = () => {
//   isDevices.value = !!window.matchMedia('(min-width: 768px)').matches;
// };

const bgAnimation = () => {
  const tl = gsap.timeline();
  const target = initEffectBg.value;
  tl.fromTo(
    target,
    { backgroundColor: light },
    {
      duration: 3,
      ease: ease,
      backgroundColor: dark,
      onComplete: initApplication,
    }
  ).to(target, {
    delay: 0.6,
    autoAlpha: 0,
  });
};

// const textAnimation = () => {
//   const SplitText = (window as any).$SplitText;
//   const gsap = (window as any).$gsap;
//   const target = document.querySelector('[data-init-text]');
//   const targetSmall = document.querySelector('[data-init-small-text]');

//   const mySplitText = new SplitText(target, { type: 'chars' });
//   const mySplitTextSmall = new SplitText(targetSmall, { type: 'chars' });
//   const chars = mySplitText.chars;
//   const charsSmall = mySplitTextSmall.chars;
//   gsap.timeline().to(target, {
//     duration: 0,
//     autoAlpha: 1,
//   });
//   gsap.timeline().to(targetSmall, {
//     duration: 0,
//     autoAlpha: 1,
//   });

//   gsap
//     .timeline({
//       defaults: { ease: ease, stagger: -0.05 },
//     })
//     .fromTo(
//       charsSmall,
//       { opacity: 0, x: -180, fontWeight: 100 },
//       {
//         duration: 2.1,
//         fontWeight: 300,
//         x: 0,
//         opacity: 1,
//         autoAlpha: 1,
//       }
//     )
//     .to(charsSmall, {
//       delay: 0.5,
//       duration: 2,
//       fontWeight: 100,
//       x: 120,
//       opacity: 0,
//     });

//   gsap
//     .timeline({
//       defaults: { ease: ease, stagger: -0.05 },
//     })
//     .fromTo(
//       chars,
//       { opacity: 0, x: -260, fontWeight: 100, color: dark },
//       {
//         delay: 0.6,
//         duration: 2,
//         fontWeight: 400,
//         x: 0,
//         opacity: 1,
//         color: light,
//         autoAlpha: 1,
//       }
//     )
//     .to(chars, {
//       duration: 1.8,
//       fontWeight: 100,
//       x: 150,
//       opacity: 0,
//     });
// };

onMounted(() => {
  // bgAnimation();
  // textAnimation();
});

// onMounted(() => {
//   controlVisibleRotater();
//   controleIsDevices();
//   window.addEventListener('resize', controleIsDevices);
// });
</script>
