import List from 'components/List';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Flex } from 'rebass';
import { colors, margin } from 'styles/theme';

import Txt from '~atoms/Txt';
import { sendAmplitudeData, useInitAmplitude } from '~utils/amplitude';

const DUMMY_DOG_IMG_URL = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg';

const Index = () => {
  const { data: utmSource } = useQuery('utmSource');
  const { data } = useQuery<{ phrases: string; testType: string }>('source');
  const [isInfoVisible, setIsInfoVisible] = React.useState(false);

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

  return (
    <div>
      <Flex variant="verticalCentralCenter" style={{ height: isInfoVisible ? '50vh' : '100vh', transition: 'height 200ms ease' }}>
        <Txt typography="t1">나는 어떤 개발자일까?</Txt>
        <img src={DUMMY_DOG_IMG_URL} alt="" style={{ width: 100 }} />
      </Flex>
      <Flex style={{ background: colors.backgroundHighLight }}>
        <List title="들어가기 전에..." highLightColor={colors.purple} style={{ margin: margin.default }}>
          {Infos.map((info) => (
            <List.Row key={info.emoji} left={info.emoji}>
              {info.text}
            </List.Row>
          ))}
        </List>
      </Flex>
    </div>
  );
};

const Infos = [
  { emoji: '🔧', text: '총 4 파트로 구성되어 있어요.' },
  { emoji: '🔧', text: '총 4 파트로 구성되어 있어요.' },
  { emoji: '🔧', text: '총 4 파트로 구성되어 있어요.' },
  { emoji: '🔧', text: '총 4 파트로 구성되어 있어요.' },
];

export default Index;
