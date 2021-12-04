import List from 'components/List';
import React from 'react';

import Txt from '~atoms/Txt';

const DUMMY_DOG_IMG_URL = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg';
const DATA = {
  title: '다방면에 관심 많은 인싸',
  summary: '시각화/스타트업/프로덕트/라이프',
  mainImage: {
    url: DUMMY_DOG_IMG_URL,
    alt: '유니콘 모자를 쓰고 있는 돼지',
  },
  summaryList: [
    { emoji: '🔧', text: '프론트엔드 개발자 중에서도 기능을 시각화 해내는 역량이 대단하신 분이에요.' },
    { emoji: '👀', text: '개발 그 자체도 좋아하지만, 개발한 제품을 유저가 사용하는 걸 볼 때 큰 희열을 느껴요.' },
  ],
};

const Index = () => (
  <main>
    <SummarySection />
  </main>
);

const SummarySection = () => (
  <section>
    <Txt>{DATA.title}</Txt>
    <Txt>{DATA.summary}</Txt>
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

export default Index;
