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
      images
    }
    ... on GallerySection {
      title
      linkToGallery {
        slug
        title
      }
      linkText
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
