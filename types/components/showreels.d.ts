declare namespace NShowreels {
  export interface IShowreel {
    title: string;
    bodytext: Object;
    videoCaption?: string;
    video: Array<NGlobal.IMedia>;
    linkToShowcase?: NGlobal.ILink;
    linkText?: string;
  }
}
