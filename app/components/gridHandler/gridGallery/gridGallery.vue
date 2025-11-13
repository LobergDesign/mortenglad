<template>
  <div class="grid-gallery">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c text-right">
          <ui-headline
            v-if="data.title"
            :data="{ title: data.title, headlineType: 'h2' }"
          />
          <ui-link
            v-if="data.linkToGallery"
            :data="{ link: data.linkToGallery, linktext: data.linkText }"
          />
        </div>
      </div>
    </div>
    <div class="grid-slider" ref="sliderGrid">
      <div class="grid-slider__wrap" ref="sliderWrap">
        <div
          v-for="(item, i) in data.images"
          :key="i"
          class="grid-slider__item-wrap"
          ref="innerSliderWrap"
        >
          <nuxt-img
            v-if="item.url"
            loading="lazy"
            provider="cloudinary"
            :src="item.url"
            :sizes="'sm:80vw lg:100vw'"
            ref="sliderImg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: NGrid.IGridGallery;
}>();
const ease = 'power4.out';
const duration = '0.65';
const { gsap, draggable } = useGsap();
const sliderWrap = useTemplateRef<HTMLElement>('sliderWrap');
const sliderGrid = useTemplateRef('sliderGrid');
const innerSliderWrap = useTemplateRef<HTMLElement>('innerSliderWrap');
const sliderImg = useTemplateRef<HTMLElement>('sliderImg');

const customSlider = () => {
  const innerElm = innerSliderWrap.value;
  const img = sliderImg.value;

  draggable.create(sliderWrap.value, {
    type: 'x',
    edgeResistance: 0.8,
    inertia: true,
    onPress: () => {
      if (!innerElm || !img) return;
      effect(innerElm, true);
      effect(img, true, false);
    },
    onRelease: () => {
      if (!innerElm || !img) return;
      effect(innerElm, false);
      effect(img, false, false);
    },
    bounds: {
      minX: -sliderWrap.value!.offsetWidth + sliderGrid.value!.offsetWidth,
      maxX: 0,
    },
  });
};

onMounted(() => {
  customSlider();
  window.addEventListener('resize', customSlider, false);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', customSlider, false);
});

const effect = (
  target: HTMLElement,
  active: boolean,
  scaleDown: boolean = true
) => {
  const tl = gsap.timeline({
    defaults: { duration: duration, ease: ease },
  });
  if (active) {
    tl.to(target, {
      scale: scaleDown ? 0.9 : 1.3,
    });
  } else {
    tl.to(target, {
      scale: 1,
    });
  }
  return tl;
};
</script>
<style lang="scss" src="./gridGallery.scss" scoped></style>
