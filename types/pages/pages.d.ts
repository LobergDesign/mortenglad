declare namespace NPage {
  interface IShowreelsPage {
    videoListCollection: {
      items: Array<NShowreels.IShowreel>;
    };
  }
  interface IResumePage {
    profileAdditionalCollection: NStats.IProfileAdditionalCollectionItem;
    profileCollection: NStats.IProfileCollectionItem;
  }
  export interface IStandardPage extends IResumePage, IShowreelsPage {
    hero?: NHero.IHeroData;
    dynamicBlockSectionCollection?: [];
  }
}
