import { Button, Image, Text } from 'rebass';

import Section from '../../templates/Section';

const MAN = 'https://user-images.githubusercontent.com/39829378/115979922-b9d6cd00-a5c3-11eb-93d4-c52290a48fad.png';

const MainSection = () => (
  <Section
    title={
      <Text variant="title" fontWeight={700} fontSize={65}>
        {'나에게 딱 맞는\n개발자 직군을 찾아보세요'}
      </Text>
    }
    description={
      <Text variant="description" fontSize={24} fontWeight={400} color="gray.6">
        어느 직군에 더 적합한지 테스트 해보세요!
      </Text>
    }
    backgroundTheme="gray"
  >
    <Button variant="dark" width={200} height={55} fontWeight="bold" fontSize={16}>
      무료로 검사 받기
    </Button>
    <Image role="presentation" src={MAN} width="380px" mt={65} />
  </Section>
);

export default MainSection;
