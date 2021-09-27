interface Request extends Omit<RequestInit, 'body'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
}

const callApi = async (url: string, requestInit: Request) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...requestInit,
      ...(requestInit?.body && { body: JSON.stringify(requestInit.body) }),
    });
    const result = await response.json();
    return result;
  } catch {
    throw 'API ERROR';
  }
};

export default callApi;
