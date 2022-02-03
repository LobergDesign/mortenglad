declare namespace NCVCollection {
  export interface ICVSingleCollection {
    type: string;
    production: string;
    role: string;
    year: string;
    additionalContent: Object;
  }
  export interface ICVCollection {
    collectionType: string;
    title: string;
    tabelHeadlines: [];
    itemsCollection: Array<ICVSingleCollection>;
  }
}
