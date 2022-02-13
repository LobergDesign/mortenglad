import { referenceAllBlocksFragment } from "./fragments/referenceBlocks";
import { seoFragment } from "./fragments/seo";
const query = `query($isPreview: Boolean!) {
    pageHome(id: "3Oln3i9cBK6vV7lvdPPMjc", preview:$isPreview) {
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
        introLinkText
        cvCollectionsLink{
          slug
          title
        }
        cvCollectionsLinkText
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
${referenceAllBlocksFragment}
${seoFragment}
`;
export { query };
