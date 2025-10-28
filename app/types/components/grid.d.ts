declare namespace NGrid {
  export interface IGridGallery {
    blockType: string;
    title: string;
    linkToGallery: NGlobal.ILink;
    linkText: string;
    images: Array<NGlobal.IMedia>;
  }
  export interface IGridTextArea {
    blockType: string;
    title: string;
    bodytext: Object;
    linkToInternalPage: NGlobal.ILink;
    linkTextToInternalPage: string;
  }
  export interface IGridImages {
    blockType: string;
    images: Array<NGlobal.IMedia>;
  }
  export interface IGridHanderData {
    items: Array<IGridGallery | IGridImages | IGridTextArea>;
  }
}
