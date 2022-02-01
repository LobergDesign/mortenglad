import { referenceAllBlocksFragment } from "./fragments/referenceBlocks";
import { seoFragment } from "./fragments/seo";
const query = `query {
    pageHome(id: "3Oln3i9cBK6vV7lvdPPMjc") {
        heroTitle
        heroImages
        heroTitleExtension
        introTitle
        introBodytext {
          json
        }
        introLink {
          ...referencePagesFragment
        }
        dynamicBlockSectionCollection {
            items {
              blockType: __typename
              ...referenceAllBlocksFragment
            }
        }
        seoSettings {
            ...seoFragment
        }
    }
}

${referenceAllBlocksFragment}
${seoFragment}
`;
export { query };
