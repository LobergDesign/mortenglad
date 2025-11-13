<template>
  <div class="overflow-hidden">
    <!-- <div data-aaaaand-action></div> -->
    <div data-warm-blanket>
      <div class="smooth-container" v-if="pageData">
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
        <site-footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { query } from '~/queries/frontpage';
// import { query as cvCollectionQuery } from '~/queries/cvCollections';
// import setHead from '~/utils/head';
// import animations from '~/mixins/loadAnimations';
// import smooth from '~/mixins/smooth';

const { data } = await useFrontpage();
const { data: cvCollection } = await useCVCollection();

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

console.log('data, data', data.value);

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

// mixins: [animations, smooth],
// useasyncData({ $apiResource, error }: Context) {
//   const response = await $apiResource.getData(query);
//   const cvCollection = await $apiResource.getDataWithLimit(
//     cvCollectionQuery,
//     3
//   );
//   if (!response) {
//     return error;
//   } else {
//     const data = response.page;
//     const hero = {
//       heroTitle: data.heroTitle,
//       heroImages: data.heroImages,
//       heroVideo: data.heroVideo,
//       backdropOpacity: data.backdropOpacity,
//       heroTitleExtension: data.heroTitleExtension,
//     };
//     const intro = {
//       introTitle: data.introTitle,
//       introBodytext: data.introBodytext,
//       introLink: data.introLink,
//       introLinkText: data.introLinkText,
//     };
//     const featuredSection = {
//       featuredTitle: data.featuredTitle,
//       featuredBodytext: data.featuredBodytext,
//       featuredLink: data.featuredLink,
//       featuredLinkText: data.featuredLinkText,
//       featuredVideo: data.featuredVideo,
//     };
//     const cvLink = {
//       cvLink: data.cvCollectionsLink,
//       cvLinkText: data.cvCollectionsLinkText,
//     };
//     return {
//       data,
//       featuredSection,
//       hero,
//       intro,
//       cvLink,
//       cvCollection: cvCollection.page || null,
//       seo: data.seo,
//     };
//   }
// },

// head(): any {
//   return setHead(this.seo || null);
// },
</script>
