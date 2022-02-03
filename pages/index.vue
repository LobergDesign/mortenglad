<template>
  <div class="overflow-hidden">
    <hero-large :data="hero" />
    <intro :data="intro" />
    <!-- <pre>
      {{ data }}
    </pre> -->
  </div>
</template>

<script lang="ts">
// import { Context } from "@nuxt/types";
// import { query } from "~/queries/global";
import { Context } from "@nuxt/types";
import Vue from "vue";
import { query } from "~/queries/frontpage";
export default Vue.extend({
  name: "IndexPage",

  async asyncData({ $apiResource, error }: Context) {
    const response = await $apiResource.getData(query);
    if (!response) {
      return error;
    } else {
      const data = response.pageHome;
      const hero = {
        heroTitle: data.heroTitle,
        heroImages: data.heroImages,
        heroTitleExtension: data.heroTitleExtension,
      };
      const intro = {
        introTitle: data.introTitle,
        introBodytext: data.introBodytext,
        introLink: data.introLink,
        introLinkText: data.introLinkText,
      };
      return { data, hero, intro };
    }
  },
});
</script>
