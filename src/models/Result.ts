export interface Result {
  generalReview: GeneralReview;
  biasResults: BiasResult[];
  advertisementList: AdvertisementList[];
  devtiRatioList: DevtiRatioList[];
}

type AdvertisementList = Array<{ [key: string]: string }>;

export interface BiasResult {
  id: number;
  bias1: Bias;
  bias2: Bias;
  pillarTitle: string;
  biasTitle: string;
  reviewList: ReviewList[];
}

export interface Bias {
  name: string;
  weight: number;
}

export interface ReviewList {
  emoji: string;
  contents: string;
}

export interface DevtiRatioList {
  devti: string;
  ratio: number;
}

export interface GeneralReview {
  title: string;
  summary: string;
  summaryList: ReviewList[];
  mainImage: {
    url: string;
    alt: string;
  };
}
