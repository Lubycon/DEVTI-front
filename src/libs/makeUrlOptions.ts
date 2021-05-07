import { Method } from 'axios';

import apiMap, { UrlMapKey } from './apiMap';

type Data = { [key: string]: string };

export interface Config {
  key: UrlMapKey;
  data: Data;
}

const getUrlParams = (url?: string) => {
  const regExp = /(?::)(\D\w+)/gim;
  const params = url?.match(regExp);

  return params && params.length > 0 ? params.map((match) => match.replace(':', '')) : [];
};

const makeRequestUrl = (url: string, params: string[], body: Data) => {
  let requestUrl = url;

  params.forEach((param) => {
    requestUrl = requestUrl.replace(`:${param}`, body[param]);
  });
  return requestUrl;
};

const deleteBodyParams = (params: string[], body: Data) => {
  const { key, ...data } = body;
  const reqBody = { ...data };

  if (!params) return reqBody;

  params.forEach((param) => {
    if (body[param]) delete reqBody.param;
  });
  return reqBody;
};

const makeUrlOptions = (config: Config) => {
  const { key, data } = config;

  const { url: keyUrl, method } = apiMap(key);

  const params = getUrlParams(keyUrl);
  const url = makeRequestUrl(keyUrl, params, data);
  const body = deleteBodyParams(params, data);

  return {
    url,
    method: method as Method,
    ...(method.toLowerCase() === 'get' ? { params: body } : { data: body }),
  };
};

export default makeUrlOptions;
