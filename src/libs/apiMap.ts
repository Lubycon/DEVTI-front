export const BASE_URL = 'http://stage.devti.kr';

const apiMap = {
  fetchQuestion: {
    url: `${BASE_URL}/questions`,
    method: 'GET',
  },
  postQuestion: {
    url: `${BASE_URL}/results`,
    method: 'POST',
  },
  getQuestionResult: {
    url: `${BASE_URL}/results?A=:A&C=:C&L=:L&P=:P&S=:S&T=:T&V=:V&W=:W&job=:job`,
    method: 'GET',
  },
  // getQuestionResult: {
  //   url: `${BASE_URL}/devti/result?A=:A&C=:C&job=:job&L=:L&P=:P&S=:S&T=:T&V=:V&W=:W`,
  //   method: 'POST',
  // },
};

export default apiMap;
