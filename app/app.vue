<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import ioTransitions from '~/utils/transitionSetter';
import { splitCharEffect } from '~/utils/transitions';

const { isApplicationReady } = useAppStatus();
const { gsap, splitText } = useGsap();
const route = useRoute();

const animations = async () => {
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
      isApplicationReady.value && animations();
    }, 500);
  },
  { immediate: true },
);

watch(
  () => route.fullPath,
  async () => {
    // will run on route change
    if (!isApplicationReady.value) return;
    await nextTick();
    setTimeout(() => {
      animations();
    }, 300);
  },
);

onMounted(async () => {
  await nextTick();
  setTimeout(() => {
    isApplicationReady.value && animations();
  }, 500);
});
</script>
