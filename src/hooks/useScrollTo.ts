import { MutableRefObject, useEffect, useRef } from 'react';
import { useQueryClient } from 'react-query';

const appendKeyPrefix = (key?: string) => `${key}-scroll`;

const useScrollTo = (key?: string, scrolloptions?: ScrollToOptions) => {
  const ref = useRef<HTMLElement>();

  const queryKey = appendKeyPrefix(key);

  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.setQueryData(queryKey, () => ref);
  }, [ref]);

  const handleExecuteScroll = () => {
    const node = key ? queryClient.getQueryData<MutableRefObject<HTMLUListElement>>(queryKey) : ref;
    const offset = 100;
    const position = node?.current?.getBoundingClientRect().top ?? 0;
    const offsetPosition = position - offset;

    node?.current?.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
      ...scrolloptions,
    });
  };

  return {
    ref,
    handleExecuteScroll,
  };
};

export default useScrollTo;
