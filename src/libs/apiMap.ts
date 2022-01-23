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
    url: `${BASE_URL}/results/:A&:C&:L&:P&:S&:T&:V&:W&:job`,
    method: 'GET',
  },
};

export default apiMap;
