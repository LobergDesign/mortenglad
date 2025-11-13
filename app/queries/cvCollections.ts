const query = `query($limit: Int, $isPreview: Boolean!) {
 pageCv(id: "39ij59NxggY9zUrKbGaFRF", preview:$isPreview) {
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
              city
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
              city
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
