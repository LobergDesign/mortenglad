import { referenceAllBlocksFragment } from "./fragments/referenceBlocks";
import { seoFragment } from "./fragments/seo";
import { heroFragment } from "./fragments/hero";
const query = `query($isPreview: Boolean!) {
  page: pageShowreels(id: "1Eg856wSojWUNz1cByEUYc", preview:$isPreview) {
        hero{
          ...heroFragment
        }
        videoListCollection(limit: 20) {
          items{
            title
            bodytext
            video
          }
        }
        dynamicBlockSectionCollection {
            items {
              blockType: __typename
              ...referenceAllBlocksFragment
            }
        }
        seo {
            ...seoFragment
        }
    }
}
${heroFragment}
${referenceAllBlocksFragment}
${seoFragment}
`;
export { query };
