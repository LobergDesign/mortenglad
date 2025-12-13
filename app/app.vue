<template>
  <div>
    <NuxtLayout>
      <NuxtPage :transition="transition" />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import ioTransitions from '~/utils/transitionSetter';
import { splitCharEffect } from '~/utils/transitions';

const { isApplicationReady } = useAppStatus();
const { gsap, splitText } = useGsap();
const route = useRoute();

const splitCharLoadEffect = async () => {
  await nextTick();
  const target = document.querySelector(
    '[data-load-split-char-effect]',
  ) as HTMLElement;
  setTimeout(() => {
    ioTransitions(gsap, splitText).action();
  }, 100);
  target && splitCharEffect(target, gsap, splitText).action();
};
watch(
  () => isApplicationReady.value,
  async () => {
    await nextTick();
    setTimeout(() => {
      console.log('WATCH isApplicationReady.value', isApplicationReady.value);
      isApplicationReady.value && splitCharLoadEffect();
    }, 500);
  },
);

watch(
  () => route.fullPath,
  async () => {
    // will run on route change
    if (!isApplicationReady.value) return;

    await nextTick();
    setTimeout(() => {
      console.log('WATCH route.fullPath', route.fullPath);
      splitCharLoadEffect();
    }, 200);
  },
);

// onMounted(async () => {
//   await nextTick();
//   setTimeout(() => {
//     isApplicationReady.value && splitCharLoadEffect();
//   }, 500);
// });

const transition = {
  css: false,
  appear: false,
  mode: 'out-in',

  onLeave(el: HTMLElement, done: Function) {
    const contentWrap = el.querySelector('.smooth-container');
    const polygonElm = el.querySelector('[data-aaaaand-action]');

    gsap.to(contentWrap, {
      y: -300,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
    });

    gsap.timeline().fromTo(
      polygonElm,
      {
        visibility: 'visible',
        yPercent: 100,
        backgroundColor: '#151515',
        clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)',
      },
      {
        clipPath: 'polygon(0 0%, 100% 0, 100% 100%, 0 100%)',
        yPercent: 0,
        backgroundColor: '#e9f1f7',
        duration: 1.1,
        ease: 'power4.inOut',
        onComplete: () => done(),
      },
    );
  },

  onBeforeEnter(el: HTMLElement) {
    const polygonElm = el.querySelector('[data-aaaaand-action]');
    gsap.set(polygonElm, {
      visibility: 'visible',
      duration: 0,
      ease: 'none',
      clipPath: 'polygon(0 0%, 100% 0, 100% 100%, 0 100%)',
    });
  },

  onEnter(el: HTMLElement, done: Function) {
    const contentWrap = el.querySelector('[data-warm-blanket]');
    const polygonElm = el.querySelector('[data-aaaaand-action]');

    gsap.to(polygonElm, {
      yPercent: -100,
      duration: 1.05,
      ease: 'power4.inOut',
      clipPath: 'polygon(0 0%, 100% 0, 100% 100%, 0 90%)',
      clearProps: true,
    });

    gsap.fromTo(
      contentWrap,
      { y: 250 },
      {
        y: 0,
        duration: 1,
        ease: 'power4.inOut',
        clearProps: true,
        onComplete: () => done(),
      },
    );
  },
};
</script>
