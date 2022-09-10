declare namespace NFeaturedSection {
  export interface IData {
    featuredTitle: string;
    featuredBodytext: Object;
    featuredLink: NGlobal.ILink;
    featuredVideo: Array<NGlobal.IMedia>;
    featuredLinkText?: string;
  }
}
