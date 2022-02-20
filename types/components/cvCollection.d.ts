declare namespace NCVCollection {
  export interface ICVSingleCollection {
    type: string;
    production: string;
    role: string;
    year: string;
    additionalContent: Object;
    place: string;
    workshop: string;
    educationcourse: String;
  }
  export interface ICVCollection {
    collectionType: string;
    title: string;
    tabelHeadlines: [];
    itemsCollection: Array<ICVSingleCollection>;
  }
}
