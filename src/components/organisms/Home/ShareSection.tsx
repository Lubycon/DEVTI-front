import { useQuery } from 'react-query';
import { Button, Text } from 'rebass';

import usePostEventLog from '../../../hooks/api/usePostEventLog';
import useModal from '../../../hooks/useModal';
import doCopy from '../../../libs/doCopy';
import { sendAmplitudeData } from '../../../utils/amplitude';
import ConfirmModal from '../../molecules/ConfirmModal';
import Section, { SectionTheme } from '../../templates/Section';

const ShareSection = () => {
  const { data } = useQuery<{ testType: string }>('source');
  const { data: utmSource } = useQuery('utmSource');
  const { data: sharedCount } = useQuery<number>('sharedCount');
  const { mutateEventLog } = usePostEventLog();
  const { renderModal, handleOpen } = useModal({ children: <ConfirmModal>링크를 복사 했습니다</ConfirmModal> });

  const handleClick = () => {
    mutateEventLog('CLICK_SHARE_BUTTON');
    sendAmplitudeData('버튼클릭', { label: '공유하기', position: '폼 섹션', source: data?.testType, utmSource });
    doCopy('https://www.devti.kr/', handleOpen);
  };

  return (
    <Section
      backgroundTheme={SectionTheme.Blue}
      title={
        <Text variant="title" color="white">
          친구와 공유해 보세요
        </Text>
      }
      description={
        <Text variant="description" color="white">
          현재 <b style={{ fontWeight: 700 }}>{sharedCount ?? 0}명</b>이 공유 했어요!
        </Text>
      }
      maxHeight={350}
      py={80}
    >
      {renderModal()}
      <Button variant="white" width={200} height={55} fontWeight={700} onClick={handleClick}>
        공유하기
      </Button>
    </Section>
  );
};

export default ShareSection;
