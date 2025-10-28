import { referencePagesFragment } from "./fragments/referencePages";

const query = `query {
    globalSettings(id: "3RFdUR5nituVqENy0L5R5c") {
      headerLogo
      mainMenuCollection {
        items {
          pageType: __typename
         ...referencePagesFragment
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
      pageNotFoundTitle
      pageNotFoundBodytext {
        json
      }
    }
  }
  ${referencePagesFragment}
  `;
export { query };
