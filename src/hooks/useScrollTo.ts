import { MutableRefObject, useEffect, useRef } from 'react';
import { useQueryClient } from 'react-query';

// NOTE
const appendKeyPrefix = (key: string) => `${key}-scroll`;

const useScrollTo = (key: string) => {
  const ref = useRef<HTMLElement>();

  const queryKey = appendKeyPrefix(key);

  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.setQueryData(queryKey, () => ref);
  }, [ref]);

  const handleExecuteScroll = () => {
    const node = queryClient.getQueryData<MutableRefObject<HTMLUListElement>>(queryKey);
    const offset = 100;
    const position = node?.current.getBoundingClientRect().top ?? 0;
    const offsetPosition = position - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return {
    ref,
    handleExecuteScroll,
  };
};

export default useScrollTo;
