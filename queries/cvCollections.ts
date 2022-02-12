const query = `query {
  pageCv(id: "39ij59NxggY9zUrKbGaFRF") {
    cvListCollection {
      items {
        collectionType: __typename
        ... on ExperienceSection {
          title
          tabelHeadlines
          itemsCollection {
            items {
              type
              production
              role
              year
              additionalContent {
                json
              }
            }
          }
        }
        ... on EducationSection {
          title
          tabelHeadlines
          itemsCollection {
            items {
              educationcourse
              place
              year
              additionalContent {
                json
              }
            }
          }
        }
        ... on WorkshoptrainingSection {
          title
          tabelHeadlines
          itemsCollection {
            items {
              workshop
              place
              year
              additionalContent {
                json
              }
            }
          }
        }
      }
    }
  }
}
`;
export { query };
