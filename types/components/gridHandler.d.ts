declare namespace NGridHandler {
  export interface IGridShowCase {
    blockType: string;
    title: string;
    showLinkToShowreelPage: boolean;
    video: NGlobal.IImage;
    videoCaption: string;
  }
  export interface IGridGallery {
    blockType: string;
    title: string;
    showLinkToGalleryPage: boolean;
    images: Array<NGlobal.IImage>;
  }

  export interface IGridHanderData {
    items: Array<NGridHandler.IGridGallery | NGridHandler.IGridShowCase>;
  }
}
