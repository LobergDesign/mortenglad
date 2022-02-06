declare namespace NGrid {
  export interface IGridShowCase {
    blockType: string;
    title: string;
    video: NGlobal.IImage;
    videoCaption: string;
    linkToShowcase: NGlobal.ILink;
    linkText: string;
  }
  export interface IGridGallery {
    blockType: string;
    title: string;
    showLinkToGalleryPage: boolean;
    images: Array<NGlobal.IImage>;
  }

  export interface IGridHanderData {
    items: Array<IGridGallery | IGridShowCase>;
  }
}
