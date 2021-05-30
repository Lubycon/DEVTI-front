import { useQuery } from 'react-query';
import { Image, Text } from 'rebass';

import { device } from '~public/assets/icons';
import Section, { SectionTheme } from '~templates/Section';

const PreviewSection = () => {
  const { data: isMobile } = useQuery<boolean>('isMobile');
  return (
    <Section
      title={
        <Text variant="title" color="white">
          {isMobile ? `DEVTI는 결과를 \n이렇게 보여줘요` : `DEVTI는 결과를 이렇게 보여줘요`}
        </Text>
      }
      description={
        <Text variant="description" color="white">
          {'프론트앤드,백앤드 직군과 스타트업, 대기업중 자신의\n성향을 확인해 볼 수 있어요.'}
        </Text>
      }
      backgroundTheme={SectionTheme.Blue}
    >
      <Image src={device} alt="preview" width={isMobile ? 736 : 829} maxWidth="none" />
    </Section>
  );
};

export default PreviewSection;
