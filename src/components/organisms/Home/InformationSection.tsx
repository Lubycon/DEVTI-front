import { Flex } from 'rebass';

import TextCard from '../../molecules/TextCard';
import Section, { SectionTheme } from '../../templates/Section';

const contents = [
  {
    emphasize: '현직 개발자',
    sentence: '"스타트업? 대기업? 어디가 나랑 맞을까?',
  },
  {
    emphasize: '초등학생 아이를 둔 부모',
    sentence: '"우리 아이의 코딩 잠재능력은 어느정도 될까?',
  },
  {
    emphasize: '취준생',
    sentence: '"프론트엔드? 백엔드? 어느 직군이 나랑 맞을까?',
  },
];

const InformationSection = () => (
  <Section
    title={'이런 분들이\nDEVTI를 사용하면 좋아요!'}
    description="프론트앤드, 백앤드 어떤 직군이 나에게 적합할지 궁금하다면"
    backgroundTheme={SectionTheme.White}
    justifyContent="flex-start"
  >
    <Flex width={780} flexDirection="column" mt={92}>
      {contents.map(({ emphasize, sentence }) => (
        <TextCard key={emphasize} emphasize={emphasize} sentence={sentence} mb={20} />
      ))}
    </Flex>
  </Section>
);

export default InformationSection;
