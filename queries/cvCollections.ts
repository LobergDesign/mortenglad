const query = `query($limit: Int) {
  page: pageCv(id: "39ij59NxggY9zUrKbGaFRF") {
    cvListCollection(limit:3) {
      items {
        collectionType: __typename
        ... on ExperienceSection {
          title
          tabelHeadlines
          itemsCollection(limit: $limit) {
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
          itemsCollection(limit: $limit) {
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
          itemsCollection(limit: $limit) {
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
