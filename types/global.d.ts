declare namespace NGlobal {
  export interface IImage {
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
}
