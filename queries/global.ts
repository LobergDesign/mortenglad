const query = `query globalSettingsEntryQuery {
    globalSettings(id: "3RFdUR5nituVqENy0L5R5c") {
      headerLogo
      mainMenuCollection {
        items {
          pageType: __typename
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
        }
      }
      telephonenumber
      email
      address
      linkedIn
      facebook
      instagram
      youtube
      contactFormTitle
      contactFormSuccessMessage
    }
  }`
export { query }
