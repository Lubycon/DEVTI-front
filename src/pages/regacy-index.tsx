import { useQuery } from 'react-query';
import { Button, Flex, Text } from 'rebass';

import usePostEventLog from '~hooks/api/usePostEventLog';
import useScrollTo from '~hooks/useScrollTo';
import Navigation from '~molecules/Navigation';
import FormSection from '~organisms/Home/FormSection';
import InformationSection from '~organisms/Home/InformationSection';
import MainSection from '~organisms/Home/MainSection';
import PreviewSection from '~organisms/Home/PreviewSection';
import ShareSection from '~organisms/Home/ShareSection';
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

  const { handleExecuteScroll } = useScrollTo('test');

  const { mutateEventLog } = usePostEventLog();

  const handleClick = () => {
    sendAmplitudeData('버튼클릭_검사하기__네비게이션', { source: data?.testType, utmSource });
    handleExecuteScroll();
    mutateEventLog('CLICK_CTA_BUTTON');
  };

  return (
    <Flex flexDirection="column">
      <Navigation>
        <Flex flexDirection="row" alignItems="flex-end">
          <Text fontWeight={800} fontSize="30px" flex={2} color="primary">
            DEVTI
          </Text>
          <Text fontWeight={800} fontSize={11} color="#789FFE">
            by EP4
          </Text>
        </Flex>
        <Button variant="primary" fontWeight={700} onClick={handleClick}>
          검사하기
        </Button>
      </Navigation>
      <MainSection />
      <PreviewSection />
      <InformationSection />
      <FormSection />
      <ShareSection />
    </Flex>
  );
};

export default Index;
