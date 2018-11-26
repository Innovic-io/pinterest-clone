export interface IPin {
  id: string;
  url: string;
  large_url: string;
  source_id: number;
}

export interface IApiResponse {
  images: IPin[];
}
