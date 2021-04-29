import { Flex } from 'rebass';

import Card from '../../molecules/Card';
import Section from '../../templates/Section';

const ELLIPSE_ONE = 'https://user-images.githubusercontent.com/39829378/115979951-e985d500-a5c3-11eb-81cd-dd3ceea0ff29.png';
const ELLIPSE_TWO = 'https://user-images.githubusercontent.com/39829378/115980016-51d4b680-a5c4-11eb-98cb-0fd94099e300.png';
const ELLIPSE_THREE = 'https://user-images.githubusercontent.com/39829378/115980028-631dc300-a5c4-11eb-9656-3e0d278e90cc.png';

const InformationSection = () => (
  <Section title={'분석적인 결과를 통해\n안정적인 커리어를 쌓아보세요'}>
    <Flex mb={267}>
      <Card imageUrl={ELLIPSE_ONE} description="개발 사전 지식이 필요없어요" alt="고양이" />
      <Card imageUrl={ELLIPSE_TWO} description="자신이 어떤 기업과 더 적합한지 알려줘요" alt="고양이" />
      <Card imageUrl={ELLIPSE_THREE} description="결과를 토대로 로드맵을 확인해보세요" alt="고양이" />
    </Flex>
  </Section>
);

export default InformationSection;
