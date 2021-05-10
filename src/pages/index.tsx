import { NextPageContext } from 'next';
import React from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Flex } from 'rebass';

import Navigation from '../components/molecules/Navigation';
import FormSection from '../components/organisms/Home/FormSection';
import InformationSection from '../components/organisms/Home/InformationSection';
import MainSection from '../components/organisms/Home/MainSection';
import PreviewSection from '../components/organisms/Home/PreviewSection';
import ShareSection from '../components/organisms/Home/ShareSection';
import callApi from '../libs/callApi';
import isMobileDetect from '../libs/server/isMobileDetect';

const Index = () => (
  <Flex flexDirection="column">
    <Navigation />
    <MainSection />
    <PreviewSection />
    <InformationSection />
    <FormSection />
    <ShareSection />
  </Flex>
);

Index.getInitialProps = async (context: NextPageContext) => {
  const {
    req,
    query: { source, community: communityType },
  } = context;

  const isMobile = isMobileDetect(req);
  const entryPoint = (source as string) ?? 'COMMON_ENTRY_POINT';
  const community = (communityType as string) ?? '';

  const queryCache = new QueryClient();
  await queryCache.prefetchQuery('source', () => callApi({ key: 'getBucketTest', data: { entryPoint } }));
  queryCache.setQueryData('community', community);
  queryCache.setQueryData('isMobile', isMobile);

  return {
    dehydratedState: dehydrate(queryCache),
  };
};

export default Index;
