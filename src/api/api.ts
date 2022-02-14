/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type Advertisement = object;

export interface AdvertisementResDto {
  /** @format date */
  advertisementEndDate?: string;

  /** @format date */
  advertisementStartDate?: string;
  advertisementType?: "ALL" | "LECTURE" | "RECRUIT" | "ETC";
  advertiser?: string;

  /** @format int64 */
  id?: number;
  imageUrl?: string;
  title?: string;
}

export interface AnswerAttribute {
  answerType?: "PRESET" | "GAGE" | "INFO";
  bias?: "V" | "A" | "S" | "C" | "P" | "T" | "W" | "L" | "J" | "Y";

  /** @format int64 */
  id?: number;

  /** @format int64 */
  sequence?: number;

  /** @format float */
  weight?: number;
}

export interface BucketTestTypeGetResDto {
  phrases?: string;
  testType?:
    | "TYPE_COMMON_1"
    | "TYPE_COMMON_2"
    | "TYPE_COMMON_3"
    | "TYPE_COMMON_4"
    | "TYPE_MOM_CAFE_1";
}

export interface DevtiBiasResDto {
  bias1?: BiasResNewDto;
  bias2?: BiasResNewDto;

  /** Bias 타이틀 */
  biasTitle?: string;

  /** @format int32 */
  id?: number;
  pillarTitle?: string;

  /**
   * Bias 총평
   * @example 필러 총평
   */
  reviewList?: ResultResDto[];
}

export interface DevtiRatioDto {
  devti?: string;

  /** @format double */
  ratio?: number;
}

export interface DevtiReqDto {
  /**
   * 희망 직무 (F,B)
   * @example F
   */
  job?: string;
}

export interface DevtiResDto {
  /** 학습, 채용공고 */
  advertisementList?: Advertisement[];

  /** Bias 결과 리스트  */
  biasResults?: DevtiBiasResDto[];

  /** 가장 많은 유형 */
  devtiRatioList?: DevtiRatioDto[];

  /**
   * DEVTI 총평
   * @example 당신은 블라블라해요 블라블라하면 블라블라해서 블라블라 할수있을거에요 블라블라~~
   */
  generalReview?: GeneralReviewDto;
}

export interface EventLogPostReqDto {
  /**
   * event type
   * @example CLICK_CTA_BUTTON
   */
  eventType?: "CLICK_CTA_BUTTON" | "CLICK_SHARE_BUTTON";

  /**
   * Bucket test type
   * @example TYPE_COMMON_1
   */
  testType?:
    | "TYPE_COMMON_1"
    | "TYPE_COMMON_2"
    | "TYPE_COMMON_3"
    | "TYPE_COMMON_4"
    | "TYPE_MOM_CAFE_1";
}

export type EventLogPostResDto = object;

export interface GeneralReviewDto {
  result?: string;
  summary?: string;
  summaryList?: ResultResDto[];
  title?: string;
}

export interface PresetResDto {
  bias?: "V" | "A" | "S" | "C" | "P" | "T" | "W" | "L" | "J" | "Y";
  label?: string;

  /** @format int64 */
  sequence?: number;

  /** @format float */
  weight?: number;
}

export interface QuestionListResDto {
  answerType?: "PRESET" | "GAGE" | "INFO";

  /** @format int64 */
  id?: number;
  presetList?: PresetResDto[];
  title?: string;
}

export interface ResultResDto {
  contents?: string;
  emoji?: string;
}

export interface SurveyPostReqDto {
  /**
   * 사전 참여 조사 comment
   * @example FE, BE그것이 문제로다
   */
  comment?: string;

  /**
   * 이메일
   * @example abc@devti.com
   */
  email?: string;

  /**
   * 휴대폰 번호
   * @example 010-9594-8215
   */
  phone?: string;

  /**
   * 사전 참여 조사 타입(현재는 DEVTI만 존재)
   * @example DEVTI
   */
  surveyType?: "DEVTI";

  /**
   * Bucket test type
   * @example TYPE_COMMON_1
   */
  testType?:
    | "TYPE_COMMON_1"
    | "TYPE_COMMON_2"
    | "TYPE_COMMON_3"
    | "TYPE_COMMON_4"
    | "TYPE_MOM_CAFE_1";
}

export interface SurveyPostResDto {
  comment?: string;
  email?: string;

  /** @format int64 */
  id?: number;
  phone?: string;
  testType?:
    | "TYPE_COMMON_1"
    | "TYPE_COMMON_2"
    | "TYPE_COMMON_3"
    | "TYPE_COMMON_4"
    | "TYPE_MOM_CAFE_1";
}

export interface BiasResNewDto {
  name?: string;

  /** @format int32 */
  weight?: number;
}
