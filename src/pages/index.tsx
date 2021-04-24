import React from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Flex } from 'rebass';

import Navigation from '../components/molecules/Navigation';
import CardSection from '../components/organisms/Home/CardSection';
import FormSection from '../components/organisms/Home/FormSection';
import InformationSection from '../components/organisms/Home/InformationSection';
import MainSection from '../components/organisms/Home/MainSection';
import PreviewSection from '../components/organisms/Home/PreviewSection';
import { fetchCats } from '../hooks/api/useGetDummyApi';

const KEY = 'dummy';

const Index = () => (
  <Flex flexDirection="column">
    <Navigation />
    <MainSection />
    <InformationSection />
    <PreviewSection />
    <CardSection />
    <FormSection />
  </Flex>
);

export const getStaticProps = async () => {
  const queryCache = new QueryClient();

  await queryCache.prefetchQuery(KEY, fetchCats);
  return { props: { dehydratedState: dehydrate(queryCache) } };
};

export default Index;
