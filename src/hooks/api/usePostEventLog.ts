import { useMutation, useQuery } from 'react-query';

import { RequestData } from '../../@types';
import callApi from '../../libs/callApi';

interface EventLog {
  eventType: string;
  testType: string;
}

export const postEventLog = (data: RequestData<EventLog>) => callApi({ key: 'postEventLog', data });
const usePostEventLog = () => {
  const { data } = useQuery<{ testType: string }>('source');

  const testType = data?.testType ?? '';

  const { mutateAsync: mutateEventLog } = useMutation(() =>
    postEventLog({
      eventType: 'CLICK_CTA_BUTTON',
      testType,
    })
  );

  return {
    mutateEventLog,
  };
};

export default usePostEventLog;
