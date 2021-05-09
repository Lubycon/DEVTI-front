export type UrlMapKey = keyof typeof urlMap;

// const URL = 'https://api.devti.kr';
const URL = 'http://13.125.156.78:8090';

const urlMap = {
  betaSignUp: {
    url: `${URL}/survey`,
    method: 'POST',
  },
  getBucketTest: {
    url: `${URL}/bucket-test-type/:entryPoint`,
    method: 'GET',
  },
  getSharedCount: {
    url: `${URL}/event-log/:eventType`,
    method: 'GET',
  },
};

const apiMap = (key: UrlMapKey) => urlMap[key];

export default apiMap;
