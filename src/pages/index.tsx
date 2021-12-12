import { useQuery } from 'react-query';
import { Flex } from 'rebass';

import { sendAmplitudeData, useInitAmplitude } from '~utils/amplitude';

const Index = () => {
  const { data: utmSource } = useQuery('utmSource');

  const { data } = useQuery<{ phrases: string; testType: string }>('source');

  useInitAmplitude({
    onInit: () => {
      const { referrer } = document;
      sendAmplitudeData('랜딩페이지진입', { source: data?.testType, utmSource, referrer });
    },
  });

  return <Flex flexDirection="column"></Flex>;
};

export default Index;
