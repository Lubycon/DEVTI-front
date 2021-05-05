import { useQuery } from 'react-query';
import { Button, Image, Text } from 'rebass';

import { person } from '../../../assets/icons';
import useScrollTo from '../../../hooks/useScrollTo';
import Section, { SectionTheme } from '../../templates/Section';

const MainSection = () => {
  const { handleExecuteScroll } = useScrollTo('test');

  const { data: isMobile } = useQuery<boolean>('isMobile');

  const handleClick = () => {
    handleExecuteScroll();
  };

  return (
    <Section
      title={'나에게 딱 맞는\n개발자 직군을 찾아보세요'}
      description={
        <>
          <Text variant="description" fontSize={24} color="gray.6" my={14}>
            어느 직군에 더 적합한지 테스트 해보세요!
          </Text>
          <Button variant="blue" width={200} height={55} fontWeight="bold" fontSize={16} onClick={handleClick}>
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
