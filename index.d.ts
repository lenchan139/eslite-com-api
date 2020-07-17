export interface PriceField {
  discount: number | null;
  currentPrice: number | null;
}

export interface DetailType {
  title: string | null;
  url: string | null;
  author: string[] | null;
  translator: string | null;
  publisher: string | null;
  publicationDate: string | null;
  imageUrl: string | null;
  price: PriceField;
  introduction: string | null;
  illstrator: string;
  authorIntro: string;
  boundType: string;
  // awardIntro: string | null;
}
export interface AdditionalDetailType {
  introduction: string;
  author: string;
  illstrator: string;
  translator: string;
  authorIntro: string;
  boundType: string;
}
export type EsliteComCollectionFunction = (
  keyword: string,
  page?: number,
) => Promise<DetailType[] | null>;

declare const esliteComCollectionApi: EsliteComCollectionFunction;

export default esliteComCollectionApi;
