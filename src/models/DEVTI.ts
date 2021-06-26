// eslint-disable-next-line import/prefer-default-export
export enum DEVTIType {
  bcpl = 'bcpl',
  bcpw = 'bcpw',
  bctl = 'bctl',
  bctw = 'bctw',
  bspl = 'bspl',
  bspw = 'bspw',
  bstl = 'bstl',
  bstw = 'bstw',
  fcpl = 'fcpl',
  fcpw = 'fcpw',
  fctl = 'fctl',
  fctw = 'fctw',
  fspl = 'fspl',
  fspw = 'fspw',
  fstl = 'fstl',
  fstw = 'fstw',
}

export type DEVTISourceType = {
  [key in DEVTIType]: string;
};

export interface Result {
  id: number;
  devti: string;
  devtiTitle: string;
  generalReview: Review;
  biasResults: BiasResult[];
  advertisementList: AdvertisementList[];
}

export interface AdvertisementList {
  createdAt: string;
  updatedAt: string;
  id: number;
  advertiser: string;
  title: string;
  imageUrl: string;
  advertisementStartDate: string;
  advertisementEndDate: string;
  advertisementType: string;
}

export interface BiasResult {
  bias: Bias;
  weight: number;
  review: Review | null;
}

export interface Bias {
  id: number;
  pillar: string;
  bias: string;
  krBias: string;
  enBias: string;
}

export interface Review {
  title: string;
  contents: string;
}
