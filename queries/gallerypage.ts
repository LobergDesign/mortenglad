import { referenceAllBlocksFragment } from "./fragments/referenceBlocks";
import { seoFragment } from "./fragments/seo";
import { heroFragment } from "./fragments/hero";
const query = `query {
    page: pageGallery(id: "SNOugAwWFBdMfz1Df8Xvw") {
        hero{
          ...heroFragment
        }
        images
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
