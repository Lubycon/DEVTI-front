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

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "//13.209.10.232:8090",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Api Documentation
 * @version 1.0
 * @license Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 * @termsOfService urn:tos
 * @baseUrl //13.209.10.232:8090
 * @contact
 *
 * Api Documentation
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  advertisement = {
    /**
     * No description
     *
     * @tags advertisement-controller
     * @name GetAdvertisementByAdvertisementTypeUsingGet
     * @summary 광고 리스트 불러오기
     * @request GET:/advertisement
     */
    getAdvertisementByAdvertisementTypeUsingGet: (
      query?: { advertisementType?: "ALL" | "LECTURE" | "RECRUIT" | "ETC" },
      params: RequestParams = {},
    ) =>
      this.request<AdvertisementResDto[], void>({
        path: `/advertisement`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  bucketTestType = {
    /**
     * No description
     *
     * @tags bucket-test-type-controller
     * @name GetBucketTestTypeAndCreateTrafficUsingGet
     * @summary Bucket test 문구 가져오기
     * @request GET:/bucket-test-type/{entryPoint}
     */
    getBucketTestTypeAndCreateTrafficUsingGet: (
      entryPoint: "COMMON_ENTRY_POINT" | "MOM_ENTRY_POINT",
      params: RequestParams = {},
    ) =>
      this.request<BucketTestTypeGetResDto, void>({
        path: `/bucket-test-type/${entryPoint}`,
        method: "GET",
        ...params,
      }),
  };
  eventLog = {
    /**
     * No description
     *
     * @tags event-log-controller
     * @name CreateUsingPost
     * @summary Event log 저장
     * @request POST:/event-log
     */
    createUsingPost: (eventLogPostReqDto: EventLogPostReqDto, params: RequestParams = {}) =>
      this.request<EventLogPostResDto, void>({
        path: `/event-log`,
        method: "POST",
        body: eventLogPostReqDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags event-log-controller
     * @name GetEventCountUsingGet
     * @summary Event 발생 횟수 조회
     * @request GET:/event-log/{eventType}
     */
    getEventCountUsingGet: (
      eventType: "CLICK_CTA_BUTTON" | "CLICK_SHARE_BUTTON",
      params: RequestParams = {},
    ) =>
      this.request<number, void>({
        path: `/event-log/${eventType}`,
        method: "GET",
        ...params,
      }),
  };
  questions = {
    /**
     * No description
     *
     * @tags question-controller
     * @name GetAllQuestionAndPresetUsingGet
     * @summary 모든 질문 및 선택 가져오기
     * @request GET:/questions
     */
    getAllQuestionAndPresetUsingGet: (params: RequestParams = {}) =>
      this.request<QuestionListResDto[], void>({
        path: `/questions`,
        method: "GET",
        ...params,
      }),
  };
  results = {
    /**
     * No description
     *
     * @tags devti-controller
     * @name GetDevtiByQueryStringUsingGet
     * @summary 결과 요청값으로 결과 반환 받기
     * @request GET:/results
     */
    getDevtiByQueryStringUsingGet: (
      query: {
        A: number;
        C: number;
        L: number;
        P: number;
        S: number;
        T: number;
        V: number;
        W: number;
        job: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DevtiResDto, void>({
        path: `/results`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags devti-controller
     * @name GetDevtiByAnswerUsingPost
     * @summary 답변 저장하여 결과 요청값 반환 받기
     * @request POST:/results
     */
    getDevtiByAnswerUsingPost: (
      answerAttributeList: AnswerAttribute[],
      params: RequestParams = {},
    ) =>
      this.request<DevtiReqDto, void>({
        path: `/results`,
        method: "POST",
        body: answerAttributeList,
        type: ContentType.Json,
        ...params,
      }),
  };
  survey = {
    /**
     * No description
     *
     * @tags survey-controller
     * @name CreateUsingPost1
     * @summary 사전 참여 신청
     * @request POST:/survey
     */
    createUsingPost1: (surveyPostReqDto: SurveyPostReqDto, params: RequestParams = {}) =>
      this.request<SurveyPostResDto, void>({
        path: `/survey`,
        method: "POST",
        body: surveyPostReqDto,
        type: ContentType.Json,
        ...params,
      }),
  };
}
