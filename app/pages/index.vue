<template>
  <div>
    <div class="aaaaand-action" data-aaaaand-action></div>
    <div data-warm-blanket>
      <div v-if="pageData">
        <div class="smooth-container">
          <hero-large v-if="pageData.hero" :data="pageData.hero" />
          <div class="spacing-t-large">
            <lazy-intro
              v-if="pageData.intro.introBodytext"
              :data="pageData.intro"
            />
            <lazy-featured-section
              v-if="pageData.featuredSection.featuredVideo"
              :data="pageData.featuredSection"
            />
            <lazy-accordion
              v-if="cvCollection?.pageCv"
              :data="cvCollection.pageCv.cvListCollection.items"
              :link="pageData.cvLink"
              :alternative="true"
            />

            <lazy-grid-handler
              v-if="pageData?.dynamicBlockSectionCollection"
              :data="pageData.dynamicBlockSectionCollection"
            />
          </div>
          <lazy-site-footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import setHead from '~/utils/head';
const { data } = await useFrontpage();
const { data: cvCollection } = await useCVCollection();
useSeoMeta(setHead(data.value!.page.seo));

const pageData = computed(() => {
  const e = data.value;
  if (!e) return;
  const page = e.page;
  const hero = {
    heroTitle: page.heroTitle,
    heroImages: page.heroImages,
    heroVideo: page.heroVideo,
    backdropOpacity: page.backdropOpacity,
    heroTitleExtension: page.heroTitleExtension,
  };
  const intro = {
    introTitle: page.introTitle,
    introBodytext: page.introBodytext,
    introLink: page.introLink,
    introLinkText: page.introLinkText,
  };
  const featuredSection = {
    featuredTitle: page.featuredTitle,
    featuredBodytext: page.featuredBodytext,
    featuredLink: page.featuredLink,
    featuredLinkText: page.featuredLinkText,
    featuredVideo: page.featuredVideo,
  };

  const cvLink = {
    cvLink: page.cvCollectionsLink,
    cvLinkText: page.cvCollectionsLinkText,
  };

  const dynamicBlockSectionCollection = page.dynamicBlockSectionCollection;

  return {
    hero,
    intro,
    featuredSection,
    cvLink,
    dynamicBlockSectionCollection,
  };
});

// const { smoothScroll } = useSmoothScroll();
// onMounted(() => {
//   const smoothWrap = document.querySelector('.smooth-container') as HTMLElement;

//   smoothScroll.init(smoothWrap, {
//     continuousScrolling: true,
//     renderByPixels: true,
//     damping: 0.09,
//     thumbMinSize: 20,
//   });
// });
</script>
