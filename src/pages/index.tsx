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

export async function getServerSideProps(context: NextPageContext) {
  const {
    query: { source, community: communityType },
  } = context;

  const entryPoint = (source as string) ?? 'COMMON_ENTRY_POINT';
  const community = (communityType as string) ?? '';

  const queryCache = new QueryClient();

  await queryCache.prefetchQuery('source', () => callApi({ key: 'getBucketTest', data: { entryPoint } }));
  queryCache.setQueryData('community', community);

  return {
    props: { dehydratedState: dehydrate(queryCache) }, // will be passed to the page component as props
  };
}

export default Index;
