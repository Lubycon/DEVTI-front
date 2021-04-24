import { Flex } from 'rebass';

import Card from '../../molecules/Card';
import Section from '../../templates/Section';

const CAT =
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';

const InformationSection = () => (
  <Section title={'분석적인 결과를 통해\n안정적인 커리어를 쌓아보세요'}>
    <Flex mb={267}>
      <Card imageUrl={CAT} description="개발 사전 지식이 필요없어요" alt="고양이" />
      <Card imageUrl={CAT} description="개발 사전 지식이 필요없어요" alt="고양이" />
      <Card imageUrl={CAT} description="개발 사전 지식이 필요없어요" alt="고양이" />
    </Flex>
  </Section>
);

export default InformationSection;