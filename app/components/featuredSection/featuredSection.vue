<template>
  <section class="featured-section spacing-b-medium">
    <div class="grid-w">
      <div class="grid-r">
        <div
          class="grid-c-6-offset-3 grid-c-8-offset-2-xl grid-remove-offset-sm"
        >
          <ui-headline-medium
            v-if="data.featuredTitle"
            :data="data.featuredTitle"
          />
          <div class="grid-r">
            <div class="grid-c-10-offset-1 grid-remove-offset-md">
              <ui-bodytext
                v-if="data.featuredBodytext"
                :data="data.featuredBodytext"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="grid-r">
        <div class="grid-c-12">
          <ui-video :data="{ video: data.featuredVideo }" />
        </div>
        <div class="grid-c-12">
          <ui-link
            v-if="data.featuredLink"
            :data="{
              link: data.featuredLink,
              linktext: data.featuredLinkText,
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default Vue.extend({
  name: 'FeaturedSection',
  props: {
    data: {
      type: Object as () => NFeaturedSection.IData,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./featuredSection.scss" scoped></style>
