export type UrlMapKey = keyof typeof urlMap;

const PROXY = '/api';
const URL = 'http://13.125.156.78:8090';

const urlMap = {
  betaSignUp: {
    url: `${PROXY}/survey`,
    method: 'POST',
  },
  getBucketTest: {
    url: `${PROXY}/bucket-test-type/:entryPoint`,
    method: 'GET',
  },
};

const apiMap = (key: UrlMapKey) => {
  const { url } = urlMap[key];
  const result = typeof window !== 'undefined' ? urlMap[key] : { ...urlMap[key], url: url.replace(PROXY, URL) };

  return result;
};

export default apiMap;
