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
import useFetchSummary, { fetchSummary } from '~hooks/api/useFetchSummary';
import { CastQuery } from '~hooks/useQueryParam';
import { BiasResult, GeneralReview } from '~models/Result';
import mainDummyImage from '~public/assets/types/vspl.png';
import convertNewLineToJSX from '~utils/convertNewLineToJSX';

const Index = ({ query }: { query: { [key: string]: string } }) => {
  const { data } = useFetchSummary(query);

  return (
    <main>
      <SummarySection general={data?.generalReview} />
      <ResultSection bias={data?.biasResults} />
    </main>
  );
};
const SummarySection = ({ general }: { general?: GeneralReview }) => {
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
          {general?.title}
        </Txt>
        <Txt typography="t2">{general?.summary}</Txt>
      </Flex>
      <MainCard ref={mainCardRef}>
        <img src={mainDummyImage} alt="내 성향이 모두 들어가 있는 아바타" style={{ width: '100%', padding: 24 }} />
        {/* <img src={SUMMARY.mainImage.url} alt="내 성향이 모두 들어가 있는 아바타" style={{ width: '100%', padding: 24 }} /> */}
        <input value={nickname} placeholder="닉네임" onChange={(e) => setNickname(e.target.value)} size={inputSize} />
      </MainCard>
      <DownloadButton type="button" onClick={downloadImage}>
        나만의 이미지 다운로드
      </DownloadButton>
      <Margin>
        <List>
          {general?.summaryList?.map((summary) => (
            <List.Row key={summary.emoji} left={summary.emoji}>
              {summary.contents}
            </List.Row>
          ))}
        </List>
      </Margin>
    </section>
  );
};

const ResultSection = ({ bias }: { bias?: BiasResult[] }) => (
  <section style={{ background: colors.backgroundHighLight, paddingTop: margin.default }}>
    <Margin>
      <div style={{ paddingBottom: 32 }}>
        <Txt typography="t1" fontWeight={700} style={{ textAlign: 'center', paddingBottom: 20 }}>
          분석 결과
        </Txt>
        <Divider />
      </div>
    </Margin>
    {bias?.map(({ id, bias1, bias2, pillarTitle, biasTitle, reviewList }) => (
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
    props: { dehydratedState: dehydrate(queryCache), query },
  };
};

export default Index;
