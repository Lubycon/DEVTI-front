import { MutableRefObject, useEffect, useRef } from 'react';
import { useQueryClient } from 'react-query';

const appendKeyPrefix = (key: string) => `${key}-scroll`;

const useScrollTo = (key: string) => {
  const ref = useRef<HTMLElement>();

  const queryKey = appendKeyPrefix(key);

  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.setQueryData(queryKey, () => ref);
  }, [ref]);

  const handleExecuteScroll = () => {
    const node = queryClient.getQueryData<MutableRefObject<HTMLElement>>(queryKey);
    node?.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return {
    ref,
    handleExecuteScroll,
  };
};

export default useScrollTo;
