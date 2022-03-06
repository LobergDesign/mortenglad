declare namespace NGlobal {
  export interface IMedia {
    url: string;
    tags: [];
    type: string;
    bytes: boolean;
    width: boolean;
    format: string;
    height: boolean;
    version: boolean;
    duration?: number;
    metadata: [];
    public_id: string;
    created_at: string;
    secure_url: string;
    original_url: string;
    resource_type: string;
    raw_transformation: string;
    original_secure_url: string;
  }
  export interface ILink {
    slug: string;
    title: string;
  }
  export interface ILinkComponent {
    link: NGlobal.ILink;
    linktext: string;
  }
  export interface IRouteItems {
    path?: string;
    component?: Vue;
    route?: string;
    name?: string;
  }
  export interface ISeo {
    metaTitle: string;
    metaDescription: string;
    openGraphTitle: string;
    openGraphType: string;
    openGraphimage: IMedia;
  }
}

declare module "*.svg?inline" {
  import Vue from "vue";
  export default Vue;
}
declare module "@contentful/rich-text-html-renderer" {
  import Vue from "vue";
  export default Vue;
}
