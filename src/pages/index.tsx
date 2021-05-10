import { NextPageContext } from 'next';
import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Flex } from 'rebass';

import Navigation from '../components/molecules/Navigation';
import FormSection from '../components/organisms/Home/FormSection';
import InformationSection from '../components/organisms/Home/InformationSection';
import MainSection from '../components/organisms/Home/MainSection';
import PreviewSection from '../components/organisms/Home/PreviewSection';
import ShareSection from '../components/organisms/Home/ShareSection';
import { getSharedCount } from '../hooks/api/useGetSharedCount';
import callApi from '../libs/callApi';
import isMobileDetect from '../libs/server/isMobileDetect';
import { sendAmplitudeData, useInitAmplitude } from '../utils/amplitude';

const Index = () => {
  const { data: utmSource } = useQuery('utmSource');
  const { data } = useQuery<{ phrases: string; testType: string }>('source');
  useInitAmplitude({
    onInit: () => {
      const { referrer } = document;
      sendAmplitudeData('랜딩페이지진입', { source: data?.testType, utmSource, referrer });
    },
  });

  return (
    <Flex flexDirection="column">
      <Navigation />
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
  const utmSource = (utmSourceType as string) ?? '';
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
