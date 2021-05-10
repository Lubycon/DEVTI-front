import { useQuery } from 'react-query';
import { Button, Image, Text } from 'rebass';

import usePostEventLog from '../../../hooks/api/usePostEventLog';
import useScrollTo from '../../../hooks/useScrollTo';
import parseNewlineCharactor from '../../../libs/replaceNewlineCharactor';
import { person } from '../../../public/assets/icons';
import { sendAmplitudeData } from '../../../utils/amplitude';
import Section, { SectionTheme } from '../../templates/Section';

const MainSection = () => {
  const { handleExecuteScroll } = useScrollTo('test');

  const { data: isMobile } = useQuery<boolean>('isMobile');
  const { data } = useQuery<{ phrases: string; testType: string }>('source');
  const { data: community } = useQuery('community');

  const handleClick = () => {
    sendAmplitudeData('버튼클릭', { label: '무료로 검사 받기', position: '메인 섹션', source: data?.testType, community });
    handleExecuteScroll();
  };

  return (
    <Section
      title={parseNewlineCharactor(data?.phrases) ?? '나에게 딱 맞는\n개발자 직군을 찾아보세요'}
      description={
        <>
          <Text variant="description" fontSize={24} color="gray.6" my={14}>
            어느 직군에 더 적합한지 테스트 해보세요!
          </Text>
          <Button variant="primary" width={200} height={55} fontWeight="bold" fontSize={16} onClick={handleClick}>
            무료로 검사 받기
          </Button>
        </>
      }
      backgroundTheme={SectionTheme.Gray}
    >
      <Image src={person} alt="person" width={isMobile ? 500 : 838} mb={100} maxWidth="none" />
    </Section>
  );
};

export default MainSection;
