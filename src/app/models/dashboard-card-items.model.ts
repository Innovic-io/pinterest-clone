export interface IPin {
  id?: string;
  url?: string;
  date?: Date;
  large_url?: string;
  source_id?: number;
  copyright?: string;
}

export interface IApiResponse {
  images?: IPin[];
}
