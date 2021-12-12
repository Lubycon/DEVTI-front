import AdCarousel from 'components/AdCarousel';
import List from 'components/List';
import Margin from 'components/Margin';
import PillarAnalysis from 'components/PillarAnalysis';
import React from 'react';
import { Flex } from 'rebass';
import { colors, fontSize, margin } from 'styles/theme';

import Txt from '~atoms/Txt';
import convertNewLineToJSX from '~utils/convertNewLineToJSX';

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
    pt: {
      title: '제품이 우선! 🙉',
      percentageFromLeft: 60,
      analysisList: DUMMY_ANALYSIS_LIST,
    },
    sc: {
      title: '중견 스타트업 🔧',
      percentageFromLeft: 60,
      analysisList: DUMMY_ANALYSIS_LIST,
    },
    lc: {
      title: '라이프 중시 성향 🎾',
      percentageFromLeft: 60,
      analysisList: DUMMY_ANALYSIS_LIST,
    },
  },
};

const Index = () => (
  <main>
    <SummarySection />
    <ResultSection />
  </main>
);

const SummarySection = () => (
  <section style={{ padding: '64px 0 40px' }}>
    <Flex flexDirection="column" alignItems="center">
      {/* TODO: as prop 추가해서 H1으로 만들기 */}
      <Txt typography="t1" fontWeight={700} style={{ marginBottom: 8 }}>
        {DATA.title}
      </Txt>
      <Txt typography="t2">{DATA.summary}</Txt>
    </Flex>
    <img src={DATA.mainImage.url} alt="내 성향이 모두 들어가 있는 아바타" style={{ width: '100%', padding: 24 }} />
    <Margin>
      <List>
        {DATA.summaryList.map((summary) => (
          <List.Row key={summary.emoji} left={summary.emoji}>
            {summary.text}
          </List.Row>
        ))}
      </List>
    </Margin>
  </section>
);

const ResultSection = () => (
  <section style={{ background: colors.backgroundHighLight, paddingTop: margin.default }}>
    <Margin>
      <div style={{ paddingBottom: 32 }}>
        <Txt typography="t1" fontWeight={700} style={{ textAlign: 'center', paddingBottom: 20 }}>
          분석 결과
        </Txt>
        <Divider />
      </div>
    </Margin>
    <PillarAnalysis
      title="당신의 개발강점"
      highLightColor={colors.red}
      bias={{ left: '시각화', right: '설계' }}
      percentageFromLeft={DATA.pillars.vf.percentageFromLeft}
      summary={DATA.pillars.vf.title}
      analysisList={DATA.pillars.vf.analysisList}
    />
    <PillarAnalysis
      title="당신이 중시하는 가치"
      highLightColor={colors.yellow}
      bias={{ left: '프로덕트', right: '테크' }}
      percentageFromLeft={DATA.pillars.pt.percentageFromLeft}
      summary={DATA.pillars.pt.title}
      analysisList={DATA.pillars.pt.analysisList}
    />
    <AdSection title={`시각화 + 프로덕트 성향 개발자인\n당신에게 추천하는 강의예요 📚`} />
    <PillarAnalysis
      title="당신과 어울리는 회사"
      highLightColor={colors.blue}
      bias={{ left: '스타트업', right: 'IT대기업' }}
      percentageFromLeft={DATA.pillars.sc.percentageFromLeft}
      summary={DATA.pillars.sc.title}
      analysisList={DATA.pillars.sc.analysisList}
      style={{ paddingTop: 45 }}
    />
    <PillarAnalysis
      title="당신이 추구하는 워라밸"
      highLightColor={colors.green}
      bias={{ left: '라이프', right: '커리어' }}
      percentageFromLeft={DATA.pillars.lc.percentageFromLeft}
      summary={DATA.pillars.lc.title}
      analysisList={DATA.pillars.lc.analysisList}
    />
    <AdSection title={`스타트업과 어울리는 당신,\n당신같은 인재를 기다리는 회사예요 ☕️`} />
  </section>
);

const AdSection = ({ title }: { title: string }) => (
  <section style={{ background: colors.backgroundLight }}>
    <Margin style={{ padding: '32px 0 24px' }}>
      <Txt typography="t2" fontWeight={700} color={colors.grey100} style={{ marginBottom: 24 }}>
        {convertNewLineToJSX(title)}
      </Txt>
      <AdCarousel />
    </Margin>
  </section>
);

const Divider = () => <div style={{ borderTop: `1px solid ${colors.grey400}` }} />;

export default Index;
