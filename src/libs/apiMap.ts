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
  fetchQuestionResult: {
    url: `${BASE_URL}/results/:queries`,
    method: 'GET',
  },
};

export default apiMap;
