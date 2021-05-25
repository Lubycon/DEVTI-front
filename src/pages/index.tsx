/* eslint-disable import/extensions */
import { NextPageContext } from 'next';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Button, Flex, Text } from 'rebass';

import { getSharedCount } from '~hooks/api/useGetSharedCount';
import usePostEventLog from '~hooks/api/usePostEventLog';
import useScrollTo from '~hooks/useScrollTo';
import callApi from '~libs/callApi';
import isMobileDetect from '~libs/server/isMobileDetect';
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
        <>
          <Text fontWeight={800} fontSize="30px" flex={2} color="primary">
            DEVTI
          </Text>
          <Button variant="primary" fontWeight={700} onClick={handleClick}>
            검사하기
          </Button>
        </>
      </Navigation>
      <MainSection />
      <PreviewSection />
      <InformationSection />
      <FormSection />
      <ShareSection />
    </Flex>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const {
    req,
    query: { source, utm_source: utmSourceType },
  } = context;

  const isMobile = isMobileDetect(req);
  const entryPoint = (source as string) ?? 'COMMON_ENTRY_POINT';
  const utmSource = (utmSourceType as string) ?? 'empty';
  const eventType = 'CLICK_SHARE_BUTTON';

  const queryCache = new QueryClient();
  await queryCache.prefetchQuery('source', () => callApi({ key: 'getBucketTest', data: { entryPoint } }));
  await queryCache.prefetchQuery('sharedCount', () => getSharedCount({ eventType }));
  queryCache.setQueryData('utmSource', utmSource);
  queryCache.setQueryData('isMobile', isMobile);

  return {
    props: { dehydratedState: dehydrate(queryCache) },
  };
}

export default Index;
