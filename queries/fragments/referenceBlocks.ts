import { referencePagesFragment } from "./referencePages";

const referenceAllBlocksFragment = `fragment referenceAllBlocksFragment on Entry {
    ... on SimpleTextArea {
      title
      bodytext {
        json
      }
      linkToInternalPage {
        ...referencePagesFragment
      }
      linkTextToInternalPage
    }
    ... on ImageSection {
      title
      images
    }
    ... on GallerySection {
      title
      showLinkToGalleryPage
      images
    }
    ... on ShowcaseSection {
      title
      linkToShowcase {
        slug
        title
      }
      linkText
      video
      videoCaption
    }
  }
  ${referencePagesFragment}`;
export { referenceAllBlocksFragment };
