import List from 'components/List';
import PillarAnalysis from 'components/PillarAnalysis';
import React from 'react';
import { Flex } from 'rebass';
import { colors, fontSize } from 'styles/theme';

import Txt from '~atoms/Txt';

const DUMMY_DOG_IMG_URL = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg';
export interface Analysis {
  emoji: string;
  text: string;
}
const DUMMY_ANALYSIS_LIST: Analysis[] = [
  { emoji: '🔧', text: '프론트엔드 개발자 중에서도 기능을 시각화 해내는 역량이 대단하신 분이에요.' },
  { emoji: '👀', text: '개발 그 자체도 좋아하지만, 개발한 제품을 유저가 사용하는 걸 볼 때 큰 희열을 느껴요.' },
  { emoji: '🔎', text: '개발 그 자체도 좋아하지만, 개발한 제품을 유저가 사용하는 걸 볼 때 큰 희열을 느껴요.' },
];
const DATA = {
  title: '다방면에 관심 많은 인싸',
  summary: '시각화/스타트업/프로덕트/라이프',
  mainImage: {
    url: DUMMY_DOG_IMG_URL,
    alt: '유니콘 모자를 쓰고 있는 돼지',
  },
  summaryList: DUMMY_ANALYSIS_LIST,
  pillars: {
    vf: {
      title: 'UI/UX 개발의 수호자✨',
      percentageFromLeft: 60,
      analysisList: DUMMY_ANALYSIS_LIST,
    },
  },
};

const Index = () => (
  // TODO: 글로벌 스타일로 이동
  <main style={{ background: colors.background, color: colors.fontDefault, fontSize: fontSize.t3 }}>
    <SummarySection />
    <ResultSection />
  </main>
);

const SummarySection = () => (
  <section>
    <Flex flexDirection="column" alignItems="center" style={{ paddingTop: 64 }}>
      {/* TODO: as prop 추가해서 H1으로 만들기 */}
      <Txt typography="t1" fontWeight={700} style={{ marginBottom: 8 }}>
        {DATA.title}
      </Txt>
      <Txt typography="t2">{DATA.summary}</Txt>
    </Flex>
    <img src={DATA.mainImage.url} alt="내 성향이 모두 들어가 있는 아바타" style={{ width: '100%', padding: 24 }} />
    <List>
      {DATA.summaryList.map((summary) => (
        <List.Row key={summary.emoji} left={summary.emoji}>
          {summary.text}
        </List.Row>
      ))}
    </List>
  </section>
);

const ResultSection = () => (
  <section>
    <Txt>분석 결과</Txt>
    <hr />
    <PillarAnalysis
      title="당신의 개발강점"
      bias={{ left: '프로덕트', right: '테크' }}
      percentageFromLeft={DATA.pillars.vf.percentageFromLeft}
      summary={DATA.pillars.vf.title}
      analysisList={DATA.pillars.vf.analysisList}
    />
  </section>
);

export default Index;
