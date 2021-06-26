export type UrlMapKey = keyof typeof urlMap;

export const BASE_URL = 'http://13.209.35.71:8090';

const urlMap = {
  betaSignUp: {
    url: `${BASE_URL}/survey`,
    method: 'POST',
  },
  getBucketTest: {
    url: `${BASE_URL}/bucket-test-type/:entryPoint`,
    method: 'GET',
  },
  getSharedCount: {
    url: `${BASE_URL}/event-log/:eventType`,
    method: 'GET',
  },
  postEventLog: {
    url: `${BASE_URL}/event-log`,
    method: 'POST',
  },
  getAllQuestion: {
    url: `${BASE_URL}/question/all`,
    method: 'GET',
  },
  postQuestionResult: {
    url: `${BASE_URL}/devti`,
    method: 'POST',
  },
};

const apiMap = (key: UrlMapKey) => urlMap[key];

export default apiMap;
