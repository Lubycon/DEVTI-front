/* eslint-disable @typescript-eslint/no-explicit-any */
interface Request extends Omit<RequestInit, 'body'> {
  body?: any;
}

const callApi = async <T = any>(url: string, requestInit: Request) => {
  try {
    const response = await fetch(url, {
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
