/* eslint-disable @typescript-eslint/no-explicit-any */
interface Request extends Omit<RequestInit, 'body'> {
  body?: any;
  data?: { [key: string]: string };
}

const findParamsInUrl = (url: string) => {
  const regexp = /(?::)(\D\w+)/gim;
  const params = url.match(regexp);

  return params && params.length > 0 ? params.map((match) => match.replace(':', '')) : [];
};

const makeRequestUrl = ({ url, params, data }: { url: string; params: string[]; data?: { [key: string]: string } }) => {
  if (data) return params.reduce((acc, param) => acc.replace(`:${param}`, data[param]), url);

  return url;
};

const callApi = async <T = any>(url: string, requestInit: Request) => {
  const params = findParamsInUrl(url);
  const urlWithParams = makeRequestUrl({ url, params, data: requestInit.data });

  try {
    const response = await fetch(urlWithParams, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...requestInit,
      ...(requestInit?.body && { body: JSON.stringify(requestInit.body) }),
    });
    const result = await response.json();

    return result as T;
  } catch {
    throw `API ERROR: ${url}`;
  }
};

export default callApi;
