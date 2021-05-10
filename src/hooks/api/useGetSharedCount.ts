import { useMutation } from 'react-query';

import { RequestData } from '../../@types';
import callApi from '../../libs/callApi';

interface EventLog {
  eventType: string;
}

export const getSharedCount = (data: RequestData<EventLog>) => callApi({ key: 'getSharedCount', data });
const usePostEventLog = () => {
  const { mutateAsync: mutateSharedCount } = useMutation(getSharedCount);

  return {
    mutateSharedCount,
  };
};

export default usePostEventLog;
