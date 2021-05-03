import { Image, Text } from 'rebass';

import { device } from '../../../assets/icons';
import Section, { SectionTheme } from '../../templates/Section';

const PreviewSection = () => (
  <Section
    title={
      <Text variant="title" fontWeight={700} fontSize={65} color="white">
        DEVTI는 결과를 이렇게 보여줘요
      </Text>
    }
    description={
      <Text variant="description" fontWeight={400} color="white">
        {'프론트앤드,백앤드 직군과 스타트업, 대기업중 자신의\n성향을 확인해 볼 수 있어요.'}
      </Text>
    }
    backgroundTheme={SectionTheme.Blue}
  >
    <Image src={device} width={829} />
  </Section>
);

export default PreviewSection;
