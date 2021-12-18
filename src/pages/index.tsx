import InfiniteSlider from 'components/InfiniteSlider';
import List from 'components/List';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Button, Flex, Image } from 'rebass';
import { colors } from 'styles/theme';

import Txt from '~atoms/Txt';
import { devti } from '~public/assets/icons';
import { sendAmplitudeData, useInitAmplitude } from '~utils/amplitude';

const DUMMY_DOG_IMG_URL = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg';

const Index = () => {
  const { data: utmSource } = useQuery('utmSource');
  const { data } = useQuery<{ phrases: string; testType: string }>('source');
  const [isInfoVisible, setIsInfoVisible] = React.useState(false);
  const { push } = useRouter();

  useInitAmplitude({
    onInit: () => {
      const { referrer } = document;
      sendAmplitudeData('랜딩페이지진입', { source: data?.testType, utmSource, referrer });
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setIsInfoVisible(true);
    }, 1000);
  });

  const handleRouteQuestionPage = () => {
    push('/question');
  };

  return (
    <Flex flexDirection="column" justifyContent="space-between">
      <Flex
        variant="verticalCentralCenter"
        style={{ height: isInfoVisible ? '50vh' : '100vh', transition: 'height 200ms ease' }}
        bg={colors.backgroundDark}
      >
        <Image src={devti} mb={14} />
        <Txt typography="t1" color={colors.grey200}>
          나는 어떤 개발자일까?
        </Txt>

        <InfiniteSlider my={60}>
          {Array.from({ length: 16 }).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Image key={i} src={DUMMY_DOG_IMG_URL} alt="" mr={30} width={140} />
          ))}
        </InfiniteSlider>
      </Flex>
      <Flex flexDirection="column" bg={colors.backgroundHighLight} px={24} height={365}>
        <List title="들어가기 전에..." highLightColor={colors.purple} my={29}>
          {Infos.map((info) => (
            <List.Row key={info.emoji} left={info.emoji}>
              {info.text}
            </List.Row>
          ))}
        </List>
        <Button
          type="button"
          style={{
            height: 56,
            backgroundColor: colors.purple,
            fontSize: 18,
            fontWeight: 'bold',
            lineHeight: '18px',
            borderRadius: 10,
          }}
          onClick={handleRouteQuestionPage}
        >
          내 개발성향 검사하러 가기
        </Button>
      </Flex>
    </Flex>
  );
};

const Infos = [
  { emoji: '🔧', text: '총 4 파트로 구성되어 있어요.' },
  { emoji: '👀', text: '총 4 파트로 구성되어 있어요.' },
  { emoji: '🙏', text: '총 4 파트로 구성되어 있어요.' },
  { emoji: '🎉', text: '총 4 파트로 구성되어 있어요.' },
];

export default Index;
