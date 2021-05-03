import { Label } from '@rebass/forms';
import { useForm } from 'react-hook-form';
import { Button, Flex, Text } from 'rebass';

import useBetaSignUp, { SignUp } from '../../../hooks/api/useBetaTestApi';
import CountCharactorTextarea from '../../atoms/CountCharactorTextarea';
import EmailDropdownInput from '../../atoms/EmailDropdownInput';
import HorizontalBorderLineBox from '../../molecules/HorizontalBorderLineBox';
import Section, { SectionTheme } from '../../templates/Section';

const FormSection = () => {
  const { mutateBetaSignUp } = useBetaSignUp();

  const { handleSubmit, register, reset } = useForm<SignUp>();

  const handleBetaSignUpSubmit = handleSubmit(async (item) => {
    await mutateBetaSignUp(item, {
      onSuccess: () => {
        reset();
      },
    });
  });

  return (
    <Section
      title={'테스트를 통해\n어떤 결과를 원하는지 작성해 주세요.'}
      backgroundTheme={SectionTheme.Gray}
      justifyContent="flex-start"
    >
      <Flex
        flex={1}
        as="form"
        flexDirection="column"
        mb={163}
        onSubmit={handleBetaSignUpSubmit}
        width={780}
        justifyContent="center"
        alignItems="center"
      >
        <Label mb={35}>
          Q1. 연락처를 기입하면 가장 먼저 테스트를 받아보실수 있습니다.
          <EmailDropdownInput mt={9} domains={['123.com', '345.com']} />
        </Label>
        <Label>
          Q2. 개발자 성향 검사를 통해 무엇을 알고싶습니까?
          <CountCharactorTextarea mt={9} height={116} {...register('comment')} />
        </Label>
        <Button variant="blue" type="submit" mt={30} width={200} height={55}>
          테스트 신청하기
        </Button>
        <HorizontalBorderLineBox mt={50}>
          <Text fontSize={14} color="gray.5" fontWeight={700} mb={1}>
            개인 정보 및 수집 정보 이용 안내
          </Text>
          <Text fontSize={14} color="gray.3">
            이메일 또는 휴대폰 정보 수집 및 작성해주신 정보는 일정기간 후 파기됨을 알려드립니다.
          </Text>
        </HorizontalBorderLineBox>
      </Flex>
    </Section>
  );
};

export default FormSection;
