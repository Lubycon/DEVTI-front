import { Button, Image, Text } from 'rebass';

import { person } from '../../../assets/icons';
import useDeviceDetect from '../../../hooks/useDeviceDetect';
import Section, { SectionTheme } from '../../templates/Section';

const MainSection = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <Section
      title={
        <Text variant="title" fontWeight={700} fontSize={65}>
          {'나에게 딱 맞는\n개발자 직군을 찾아보세요'}
        </Text>
      }
      description={
        <>
          <Text variant="description" fontSize={24} fontWeight={400} color="gray.6" my={20}>
            어느 직군에 더 적합한지 테스트 해보세요!
          </Text>
          <Button variant="blue" width={200} height={55} fontWeight="bold" fontSize={16}>
            무료로 검사 받기
          </Button>
        </>
      }
      backgroundTheme={SectionTheme.Gray}
    >
      <Image src={person} width={isMobile ? 500 : 838} mb={100} maxWidth="none" />
    </Section>
  );
};
export default MainSection;
