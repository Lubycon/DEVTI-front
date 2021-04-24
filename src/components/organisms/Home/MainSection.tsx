import { Button, Image, Text } from 'rebass';

import Section from '../../templates/Section';

const WOMAN = 'https://user-images.githubusercontent.com/39829378/115711565-a43c8a00-a3ae-11eb-9c50-2e4188dac35c.png';

const MainSection = () => (
  <Section
    title={
      <Text variant="title" fontWeight={700} fontSize={65}>
        {'나에게 딱 맞는\n개발자 직군을 찾아보세요'}
      </Text>
    }
    description="어느 직군에 더 적합한지 테스트 해보세요!"
    backgroundTheme="gray"
  >
    <Button variant="dark" width={304} fontWeight={700} fontSize={20}>
      무료로 검사 받기
    </Button>
    <Image role="presentation" src={WOMAN} width="380px" mt={65} />
  </Section>
);

export default MainSection;
