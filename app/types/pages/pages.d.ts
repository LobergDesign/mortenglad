declare namespace NPage {
  interface IGalleryPage {
    images: Array<NGlobal.IMedia>;
  }
  interface IShowreelsPage {
    videoListCollection: {
      items: Array<NShowreels.IShowreel>;
    };
  }
  interface IResumePage {
    profileAdditionalCollection: NStats.IProfileAdditionalCollectionItem;
    profileCollection: NStats.IProfileCollectionItem;
  }
  export interface IStandardPage
    extends IResumePage,
      IShowreelsPage,
      IGalleryPage {
    hero?: NHero.IHeroData;
    dynamicBlockSectionCollection?: [];
  }
}
