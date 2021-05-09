export type UrlMapKey = keyof typeof urlMap;

const URL = 'https://13.125.156.78:8090';

const urlMap = {
  betaSignUp: {
    url: `${URL}/survey`,
    method: 'POST',
  },
  getBucketTest: {
    url: `${URL}/bucket-test-type/:entryPoint`,
    method: 'GET',
  },
};

const apiMap = (key: UrlMapKey) => urlMap[key];

export default apiMap;
