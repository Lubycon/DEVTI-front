import { RequestData } from '@types';
import { useMutation } from 'react-query';

interface SignUpCommon {
  comment: string;
  surveyType: string;
  testType: string;
}
interface SignUpWithPhone extends SignUpCommon {
  phone: string;
}
interface SignUpWithEmail extends SignUpCommon {
  email: string;
}

export type SignUp = SignUpWithPhone | SignUpWithEmail;

const useBetaSignUp = () => {
  const submit = (data: RequestData<SignUp>) =>
    new Promise((resolve) => {
      resolve(data);
    });

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
