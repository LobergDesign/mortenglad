<template>
  <section id="intro" class="intro spacing-b">
    <div class="grid-w">
      <div class="grid-r">
        <div
          class="grid-c-6-offset-3 grid-c-8-offset-2-xl grid-remove-offset-sm"
        >
          <ui-headline-medium :data="data.introTitle" />
          <div class="grid-r">
            <div class="grid-c-10-offset-1 grid-remove-offset-md">
              <ui-bodytext :data="data.introBodytext" />
              <ui-link
                :data="{ link: data.introLink, linktext: data.introLinkText }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "IntroComponent",
  props: {
    data: {
      type: Object as () => NIntro.IIntroData,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./intro.scss" scoped></style>
