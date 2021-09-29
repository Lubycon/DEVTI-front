import { RequestData } from '@types';
import { useMutation, useQuery } from 'react-query';

interface EventLog {
  eventType: string;
  testType: string;
}

export const postEventLog = (data: RequestData<EventLog>) => new Promise((resolve) => resolve(data));
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
