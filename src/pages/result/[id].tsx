import { NextPageContext } from 'next';
import Head from 'next/head';
import { Flex, Heading, Image, Text } from 'rebass';

import Navigation from '~molecules/Navigation';
import PillerGage from '~molecules/PillerGage';
import { fcpw } from '~public/assets/icons';

const Result = ({ metaImageUrl }: { metaImageUrl: string }) => (
  <Flex>
    <Head>
      <meta property="og:title" content="DEVTI 데브티아이" />
      <meta property="og:description" content="나에게 딱 맞는 개발자 직군을 테스트를 통해 찾아보세요!" />
      <meta property="og:image" content={metaImageUrl} />
    </Head>
    <Navigation>
      <Heading fontSize={20} fontWeight={800} color="primary">
        DEVTI
      </Heading>
    </Navigation>
    <Flex variant="verticalCentralCenter" width="100%" px={3}>
      <Flex flexDirection="column" pt={80} alignItems="center" justifyContent="center" width={260}>
        <Text fontSize={22} fontWeight={700} m={1}>
          FCPW
        </Text>
        <Text fontSize={22} fontWeight={700} textAlign="center" lineHeight="26px" mb={40} sx={{ wordBreak: 'break-word' }}>
          열정적인 꿈을 가진 당신은 야망가
        </Text>
      </Flex>
      <Image src={fcpw} mb={65} />

      <PillerGage
        totalCount={100}
        currentCount={61}
        leftNode={<Text>F 프론트엔드 61%</Text>}
        rightNode={<Text>B 백엔드 39%</Text>}
        mb={64}
        mt={2}
      />
      <PillerGage
        totalCount={100}
        currentCount={61}
        mb={64}
        mt={2}
        leftNode={<Text>C 스타트업 21%</Text>}
        rightNode={<Text>S 대기압 79%</Text>}
        sx={{
          transform: 'rotate(180deg)',
        }}
      />
      <PillerGage
        totalCount={100}
        currentCount={61}
        mb={64}
        mt={2}
        leftNode={<Text>C 스타트업 21%</Text>}
        rightNode={<Text>S 대기압 79%</Text>}
        sx={{
          transform: 'rotate(180deg)',
        }}
      />
      <PillerGage
        mt={2}
        totalCount={100}
        currentCount={61}
        leftNode={<Text>F 워크 중심61</Text>}
        rightNode={<Text>F 워라밸 39%</Text>}
      />
    </Flex>
  </Flex>
);

export async function getServerSideProps(context: NextPageContext) {
  const imageUrlOne =
    'https://images.unsplash.com/photo-1622832148332-b436648cef62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80';
  const imageUrlTwo = 'https://user-images.githubusercontent.com/39829378/117588913-879ba280-b161-11eb-81f1-d120b79d2f78.png';
  const {
    query: { id },
  } = context;
  const metaImageUrl = id === 'entp' ? imageUrlOne : imageUrlTwo;

  return {
    props: { metaImageUrl },
  };
}

export default Result;
