<template>
  <div>
    <hero-large />
    <pre>
      {{ data }}
    </pre>
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

  async asyncData({ $apiResource }: Context) {
    const frontpageData = await $apiResource.getData(query);
    console.log("globalSettings", frontpageData?.pageHome);
    return { data: frontpageData?.pageHome };
  },
  // async asyncData({ $graphql, params }) {
  //     const query = gql`
  //       query planets {
  //         allPlanets {
  //           planets {
  //             id
  //             name
  //           }
  //         }
  //       }
  //     `;

  //     const planets = await $graphql.default.request(query);
  //     return { planets };
  //   },

  //  async asyncData({ error, $graphql}: Context) {
  //    console.log("error", error);
  //    console.log("error", $graphql)

  // 	try {
  // 		const response = await $graphql.default.request(query);
  //     console.log("response", response);
  // 		return response;
  // 	} catch (error: any) {
  //      console.error(JSON.stringify(error, undefined, 2));
  //       process.exit(1);
  // 	}

  // }
});
</script>
