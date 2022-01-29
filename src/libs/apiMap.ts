export const BASE_URL = process.env.API_URL;

const apiMap = {
  fetchQuestion: {
    url: `${BASE_URL}/questions`,
    method: 'GET',
  },
  postQuestion: {
    url: `${BASE_URL}/results`,
    method: 'POST',
  },
  fetchSummary: {
    url: `${BASE_URL}/results?A=:A&C=:C&L=:L&P=:P&S=:S&T=:T&V=:V&W=:W&job=:job`,
    method: 'GET',
  },
};

export default apiMap;
