import { useMutation } from 'react-query';

import { RequestData } from '../../@types';
import callApi from '../../libs/callApi';

export interface SignUp {
  comment: string;
  email: string;
  phone: string;
  surveyType: string;
  testType: string;
}

const useBetaSignUp = () => {
  const submit = (data: RequestData<SignUp>) => callApi({ key: 'betaSignUp', data });

  const { mutateAsync: mutateBetaSignUp } = useMutation(submit, {
    onError: () => {
      alert('잠시 후 다시 시도해 주세요.');
    },
  });

  return {
    mutateBetaSignUp,
  };
};

export default useBetaSignUp;
