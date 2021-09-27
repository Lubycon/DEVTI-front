import { NextPageContext } from 'next';
import Head from 'next/head';
import results from 'queryKeys/results';
import React, { useEffect, useState } from 'react';
import { Flex, Heading, Image, Text, Button } from 'rebass';

import doCopy from '~libs/doCopy';
import { DEVTISourceType, DEVTIType } from '~models/DEVTI';
import Navigation from '~molecules/Navigation';
import PillerGage from '~molecules/PillerGage';

const Result = ({ metaImageUrl }: { metaImageUrl: string }) => {
  // const result = useQuery('result');
  const [href, setHref] = useState('');

  useEffect(() => {
    setHref(window.location.href);
  }, []);
  console.log('metaImageUrl', metaImageUrl);

  return (
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
        <Image src={metaImageUrl} mb={65} />
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
        <Flex flexDirection="column">
          <Text mb={16} mt={80} fontSize={22} fontWeight="bold">
            진정한 프론트엔드 개발자
          </Text>
          <Text variant="primary">
            {`조직에서 인정받고 싶어하고 정해진 규율과 법칙을 준수하는 성향이 강해 스타트업 보다 대기업에 더 적합합니다.
그 안에서 동기부여를 얻고 싶어하고 승진과 성장욕구가 강한 스타일로 윗사람을 잘 만난다면 폭풍 성장할 가능성이 있는 당신!
또한 찐 개발자 성향보다 프로덕트 전체를 보며 추후 창업에 대한 욕구도 있어 보이는군요.`}
          </Text>
        </Flex>
        <Flex flexDirection="column" width="375px" height="306px" alignItems="center" bg="#F8F8F8" mt={4}>
          <Text fontSize="22px" fontWeight="bold" mt="60px">
            친구들과 공유해 보세요
          </Text>
          <Button
            width="214px"
            height="50px"
            mt={20}
            style={{
              borderRadius: '100px',
            }}
            onClick={() => {
              doCopy(`${href}`);
            }}
          >
            링크 복사
          </Button>
          <Button
            mt={9}
            width="214px"
            height="50px"
            style={{
              border: '1px solid #9D9D9D',
              borderRadius: '100px',
              backgroundColor: 'inherit',
              color: '#9d9d9d',
            }}
          >
            테스트 다시하기
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export async function getServerSideProps(context: NextPageContext) {
  const {
    query: { id },
  } = context;

  const type = id as DEVTIType;
  const typeSet = (await import('~public/assets/types')) as DEVTISourceType;
  const metaImageUrl = typeSet[type] ?? typeSet.fcpw;

  return {
    props: { metaImageUrl },
  };
}

export default Result;
