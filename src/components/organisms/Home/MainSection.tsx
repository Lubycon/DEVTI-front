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
  const { mutateEventLog } = usePostEventLog();
  const { data } = useQuery<{ phrases: string; testType: string }>('source');
  const { data: utmSource } = useQuery('utmSource');

  const handleClick = () => {
    sendAmplitudeData('버튼클릭_무료로검사받기__메인섹션', { source: data?.testType, utmSource });
    handleExecuteScroll();
    mutateEventLog('CLICK_CTA_BUTTON');
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
