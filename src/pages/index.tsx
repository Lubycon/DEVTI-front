import React from 'react';
import { Flex } from 'rebass';

import Navigation from '../components/molecules/Navigation';
import FormSection from '../components/organisms/Home/FormSection';
import InformationSection from '../components/organisms/Home/InformationSection';
import MainSection from '../components/organisms/Home/MainSection';
import PreviewSection from '../components/organisms/Home/PreviewSection';
import ShareSection from '../components/organisms/Home/ShareSection';

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

export default Index;
