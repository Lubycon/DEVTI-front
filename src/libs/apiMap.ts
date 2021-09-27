export const BASE_URL = 'http://52.78.185.130:8090';

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
    url: `${BASE_URL}/results?A=:A&C=:C&job=:job&L=:L&P=:P&S=:S&T=:T&V=:V&W=:W`,
    method: 'GET',
  },
  // getQuestionResult: {
  //   url: `${BASE_URL}/devti/result?A=:A&C=:C&job=:job&L=:L&P=:P&S=:S&T=:T&V=:V&W=:W`,
  //   method: 'POST',
  // },
};

export default apiMap;
