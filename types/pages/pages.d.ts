declare namespace NPage {
  interface IResumePage {
    profileAdditionalCollection: NStats.IProfileAdditionalCollectionItem;
    profileCollection: NStats.IProfileCollectionItem;
  }
  export interface IStandardPage extends IResumePage {
    hero?: NHero.IHeroData;
    dynamicBlockSectionCollection?: [];
  }
  // export interface ICVCollection {
  //   collectionType: string;
  //   title: string;
  //   tabelHeadlines: [];
  //   itemsCollection: Array<ICVSingleCollection>;
  // }
}
