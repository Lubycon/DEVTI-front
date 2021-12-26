export interface Result {
  generalReview: GeneralReview;
  biasResults: BiasResult;
  advertisementList: AdvertisementList[];
  devtiRatioList: DevtiRatioList[];
}

type AdvertisementList = Array<{ [key: string]: string }>;

export interface BiasResult {
  VA: PillarResult;
  PT: PillarResult;
  SC: PillarResult;
  WL: PillarResult;
}

export interface PillarResult {
  bias: string;
  weight: number;
  biasTitle: string;
  reviewList: string[];
}

export interface DevtiRatioList {
  devti: string;
  ratio: number;
}

export interface GeneralReview {
  result: string;
  title: string;
  content: string;
  summaryReview: string[];
}
