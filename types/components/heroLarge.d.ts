declare namespace NHeroLarge {
  export interface IHeroLargeData {
    heroTitle: string;
    heroImages: Array<NGlobal.IMedia>;
    heroTitleExtension: string;
    heroVideo?: Array<NGlobal.IMedia>;
    headlineType?: string;
    backdropOpacity?: number;
  }
}
