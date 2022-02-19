declare namespace NStats {
  interface IProfileCollectionItem {
    title: string;
    value: string;
  }
  interface IProfileAdditionalCollectionItem {
    title: string;
    list: Array<string>;
  }
  export interface IProfileCollection {
    items: Array<IProfileCollectionItem>;
  }
  export interface IProfileAdditionalCollection {
    items: Array<IProfileAdditionalCollectionItem>;
  }
}
