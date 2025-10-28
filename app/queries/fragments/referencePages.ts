const referencePagesFragment = `fragment referencePagesFragment on Entry {
    ... on PageHome {
        slug
        title
      }
      ... on PageCv {
        slug
        title
      }
      ... on PageResume {
        slug
        title
      }
      ... on PageShowreels {
        slug
        title
      }
      ... on PageGallery {
        slug
        title
      }
      ... on PageContact {
        slug
        title
      }
  }`;
export { referencePagesFragment };
