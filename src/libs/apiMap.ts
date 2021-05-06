export type UrlMapKey = keyof typeof urlMap;

const URL = '/api';

const urlMap = {
  betaSignUp: {
    url: `${URL}/survey`,
    method: 'POST',
  },
};

const apiMap = (key: UrlMapKey) => urlMap[key];

export default apiMap;
