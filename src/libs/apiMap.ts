export type UrlMapKey = keyof typeof urlMap;

const URL = 'https://api.devti.kr';

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
