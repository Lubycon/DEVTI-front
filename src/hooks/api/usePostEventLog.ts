import { RequestData } from '@types';
import { useMutation, useQuery } from 'react-query';

import callApi from '~libs/callApi';

interface EventLog {
  eventType: string;
  testType: string;
}

export const postEventLog = (data: RequestData<EventLog>) => callApi({ key: 'postEventLog', data });
const usePostEventLog = () => {
  const { data } = useQuery<{ testType: string }>('source');

  const testType = data?.testType ?? '';

  const { mutateAsync: mutateEventLog } = useMutation((eventType: string) =>
    postEventLog({
      eventType,
      testType,
    })
  );

  return {
    mutateEventLog,
  };
};

export default usePostEventLog;
