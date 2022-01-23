import styled from '@emotion/styled';
import AdCarousel from 'components/AdCarousel';
import List from 'components/List';
import Margin from 'components/Margin';
import PillarAnalysis from 'components/PillarAnalysis';
import domtoimage from 'dom-to-image';
import { GetServerSideProps } from 'next';
import results from 'queryKeys/results';
import { useRef, useState } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Flex } from 'rebass';
import { colors, margin } from 'styles/theme';

import Txt from '~atoms/Txt';
import { fetchSummary } from '~hooks/api/useFetchSummary';
import { CastQuery } from '~hooks/useQueryParam';
import mainDummyImage from '~public/assets/types/vspl.png';
import convertNewLineToJSX from '~utils/convertNewLineToJSX';

const DUMMY_DOG_IMG_URL = 'https://user-images.githubusercontent.com/3839771/149458424-4115add3-4cc7-4653-83ad-72c0aab6e76d.png';
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

const MOCK_BIAS_RESULT = [
  {
    id: '1',
    bias1: {
      name: '시각화',
      weight: 70,
    },
    bias2: {
      name: '설계',
      weight: 40,
    },
    pillarTitle: '당신의 개발강점',
    biasTitle: 'UI/UX 개발의 수호자',
    reviewList: [
      { emoji: '🔧', text: '프론트엔드 개발자 중에서도 기능을 시각화 해내는 역량이 대단하신 분이에요.' },
      { emoji: '👀', text: '개발 그 자체도 좋아하지만, 개발한 제품을 유저가 사용하는 걸 볼 때 큰 희열을 느껴요.' },
      { emoji: '🔎', text: '개발 그 자체도 좋아하지만, 개발한 제품을 유저가 사용하는 걸 볼 때 큰 희열을 느껴요.' },
    ],
  },
  {
    id: '2',
    bias1: {
      name: '프로덕트',
      weight: 60,
    },
    bias2: {
      name: '테크',
      weight: 40,
    },
    pillarTitle: '당신이 중시하는 가치',
    biasTitle: '제품이 우선!',
    reviewList: [
      { emoji: '🔧', text: '프론트엔드 개발자 중에서도 기능을 시각화 해내는 역량이 대단하신 분이에요.' },
      { emoji: '👀', text: '개발 그 자체도 좋아하지만, 개발한 제품을 유저가 사용하는 걸 볼 때 큰 희열을 느껴요.' },
      { emoji: '🔎', text: '개발 그 자체도 좋아하지만, 개발한 제품을 유저가 사용하는 걸 볼 때 큰 희열을 느껴요.' },
    ],
  },
];

const Index = () => (
  <main>
    <SummarySection />
    <ResultSection />
  </main>
);
const SummarySection = () => {
  const [nickname, setNickname] = useState('');
  const inputSize = nickname.length === 0 ? 5 : nickname.length + 2;
  const mainCardRef = useRef(null);

  function downloadImage() {
    const canvas = mainCardRef.current;
    if (canvas !== null)
      domtoimage.toJpeg(canvas, { quality: 0.95 }).then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${nickname}-devti.jpeg`;
        link.href = dataUrl;
        link.click();
      });
  }

  return (
    <section style={{ padding: '64px 0 40px' }}>
      <Flex flexDirection="column" alignItems="center">
        {/* TODO: as prop 추가해서 H1으로 만들기 */}
        <Txt typography="t1" fontWeight={700} style={{ marginBottom: 8 }}>
          {DATA.title}
        </Txt>
        <Txt typography="t2">{DATA.summary}</Txt>
      </Flex>
      <MainCard ref={mainCardRef}>
        <img src={mainDummyImage} alt="내 성향이 모두 들어가 있는 아바타" style={{ width: '100%', padding: 24 }} />
        {/* <img src={DATA.mainImage.url} alt="내 성향이 모두 들어가 있는 아바타" style={{ width: '100%', padding: 24 }} /> */}
        <input value={nickname} placeholder="닉네임" onChange={(e) => setNickname(e.target.value)} size={inputSize} />
      </MainCard>
      <DownloadButton type="button" onClick={downloadImage}>
        나만의 이미지 다운로드
      </DownloadButton>
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
};

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
    {MOCK_BIAS_RESULT.map(({ id, bias1, bias2, pillarTitle, biasTitle, reviewList }) => (
      <PillarAnalysis
        key={id}
        title={pillarTitle}
        highLightColor={colors.red}
        bias={{ left: bias1.name, right: bias2.name }}
        percentageFromLeft={bias1.weight}
        summary={biasTitle}
        analysisList={reviewList}
      />
    ))}

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

const MainCard = styled.div`
  position: relative;
  input {
    background: #a55fea;
    position: absolute;
    left: 25vw;
    bottom: 70px;
    font-size: 1.5rem;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 6px 10px;
    font-weight: bold;

    &::placeholder {
      color: ${colors.grey200};
      font-style: italic;
    }
  }
`;

const DownloadButton = styled.button`
  background: #1cf84f;
  width: 100%;
  border: none;
  padding: 14px;
  color: #3d3d3d;
  font-weight: bold;
  font-size: 1rem;
  top: -63px;
  position: relative;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryCache = new QueryClient();

  const { query } = context as { query: CastQuery<{ [key: string]: string }> };

  await queryCache.prefetchQuery(results.summary(query), () => fetchSummary(query));

  return {
    props: { dehydratedState: dehydrate(queryCache) },
  };
};

export default Index;
