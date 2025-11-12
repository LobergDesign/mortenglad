declare namespace NFrontpage {
  export interface IData {
    page: {
      featuredTitle: string;
      featuredBodytext: Object;
      featuredLink: NGlobal.ILink;
      featuredVideo: Array<NGlobal.IMedia>;
      featuredLinkText?: string;
      heroTitle: string;
      heroImages: Array<NGlobal.IMedia>;
      heroTitleExtension: string;
      heroVideo?: Array<NGlobal.IMedia>;
      headlineType?: string;
      backdropOpacity?: number;
      introTitle: string;
      introBodytext: Object;
      introLink: NGlobal.ILink;
      introLinkText?: string;
    };
  }
}
