import { Button, Text } from 'rebass';

import Section, { SectionTheme } from '../../templates/Section';

const ShareSection = () => (
  <Section
    backgroundTheme={SectionTheme.Blue}
    title={
      <Text variant="title" color="white">
        친구와 공유해 보세요
      </Text>
    }
    description={
      <Text variant="description" color="white">
        현재 <b style={{ fontWeight: 700 }}>123,450명</b>이 공유 했어요!
      </Text>
    }
    maxHeight={350}
    py={80}
  >
    <Button variant="white" width={200} height={55} fontWeight={700}>
      공유하기
    </Button>
  </Section>
);

export default ShareSection;
