import axios from 'axios';
import { useMutation } from 'react-query';

export interface SignUp {
  comment: string;
  email: string;
}

const useBetaSignUp = () => {
  const request = async (signUp: SignUp) => {
    const URL = '/api/survey';
    const { data } = await axios.post(URL, {
      ...signUp,
      surveyType: 'DEVTI',
    });
    return data;
  };

  const { mutateAsync: mutateBetaSignUp } = useMutation(request, {
    onSuccess: () => {
      alert('신청했습니다. 좀만 기다려주쇼~');
    },
    onError: () => {
      alert('잠시 후 다시 시도해 주세요.');
    },
  });

  return {
    mutateBetaSignUp,
  };
};

export default useBetaSignUp;
