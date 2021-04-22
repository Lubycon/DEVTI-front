import { Input, Label, Textarea } from '@rebass/forms';
import { Button, Flex } from 'rebass';

import Section from '../../templates/Section';

const FormSection = () => (
  <Section
    title={'테스트를 통해\n어떤 결과를 원하는지 작성해 주세요.'}
    description={'현재 DEVTI는 베타 테스터를 모집중입니다.\n좀더 나은 서비스 품질을 위해 잠시만 기다려 주세요.'}
    backgroundTheme="gray"
  >
    <Flex as="form" flexDirection="column" mb={163}>
      <Label mb={35}>
        Q1. 개발자 성향 검사를 통해 무엇을 알고싶습니까?
        <Textarea mt={9} height={116} />
      </Label>
      <Label>
        Q2. 연락처를 기입하면 가장 먼저 테스트를 받아보실수 있습니다.
        <Input type="email" mt={9} />
      </Label>
      <Button variant="dark" type="submit" mt={30}>
        신청완료
      </Button>
    </Flex>
  </Section>
);

export default FormSection;
