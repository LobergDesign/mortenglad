import { referenceAllBlocksFragment } from "./fragments/referenceBlocks";
import { seoFragment } from "./fragments/seo";
import { heroFragment } from "./fragments/hero";
const query = `query($isPreview: Boolean!) {
  page: pageResume(id: "5BrH9tH85VtpxsV9YZDDwG", preview:$isPreview) {
        hero{
          ...heroFragment
        }
        profileCollection(limit: 10) {
          items {
            title
            value
          }
        }
        profileAdditionalCollection(limit: 20){
          items{
            title
            list
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
