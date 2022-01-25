<template>
  <div>
    <h1>Headline 1 - hero</h1>
    <p>
      lorem
    </p>
    <h1>Headline 1</h1>
    <h2>Headline 2</h2>
    <h3>HEadline 3</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus quam id
      porttitor at. Consectetur porta amet. Eget ut condimentum morbi rhoncus,
      lacinia integer pretium suspendisse tortor. Turpis massa iaculis orci et
      at. Posuere sit dui lacus lectus massa ante. Ligula facilisi tincidunt
      mattis vivamus est, mauris mi ut sed. Molestie sagittis, risus, id
      pulvinar porta neque amet.
      <ul> 
        <li>
        ul li</li>
         <li>
        ul li</li>
         <li>
        ul li</li>
        </ul>
    </p>

     <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus quam id
      porttitor at. Consectetur porta amet. Eget ut condimentum morbi rhoncus,
      lacinia integer pretium suspendisse tortor. Turpis massa iaculis orci et
      at. Posuere sit dui lacus lectus massa ante. Ligula facilisi tincidunt
      mattis vivamus est, mauris mi ut sed. Molestie sagittis, risus, id
      pulvinar porta neque amet.
     <ol>
       <li>ol li</li>
       <li>ol li</li>
     </ol>
     <a href="#">Link</a>
    </p>
    <ul><li>ul li</li>
    <li>ul li</li></ul>
  </div>
</template>

<script lang="ts">
// import { Context } from "@nuxt/types";
// import { query } from "~/queries/global";
import Vue from "vue"

export default Vue.extend({
  name: "IndexPage",

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
})
</script>
