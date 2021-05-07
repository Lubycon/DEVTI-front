import { Input, Label } from '@rebass/forms';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Button, Flex, Text } from 'rebass';

import useBetaSignUp, { SignUp } from '../../../hooks/api/useBetaTestApi';
import useModal from '../../../hooks/useModal';
import useScrollTo from '../../../hooks/useScrollTo';
import CountCharactorTextarea from '../../atoms/CountCharactorTextarea';
import EmailDropdownInput from '../../atoms/EmailDropdownInput';
import ConfirmModal from '../../molecules/ConfirmModal';
import HorizontalBorderLineBox from '../../molecules/HorizontalBorderLineBox';
import Section, { SectionTheme } from '../../templates/Section';

const FormSection = () => {
  const [isEmailInput, setIsEmailInput] = useState(true);

  const { mutateBetaSignUp } = useBetaSignUp();

  const { handleSubmit, register, reset } = useForm<SignUp & { domain: string }>();

  const { data: isMobile } = useQuery<boolean>('isMobile');

  const { data } = useQuery<{ testType: string }>('source');

  const { ref } = useScrollTo('test');

  const { handleOpen, renderModal } = useModal({ children: <ConfirmModal>테스트 신청이 완료 되었습니다.</ConfirmModal> });

  const handleBetaSignUpSubmit = handleSubmit(async (item) => {
    const { comment, domain, email: id, phone } = item;

    const fetchData = {
      comment,
      phone,
      email: `${id}@${domain}`,
      surveyType: 'DEVTI',
      testType: data?.testType ?? '',
    };
    await mutateBetaSignUp(fetchData, {
      onSuccess: () => {
        reset();
        handleOpen();
      },
    });
  });

  const handleIsEmailInputToggle = () => {
    setIsEmailInput(!isEmailInput);
  };

  return (
    <Section
      title={
        <Text ref={ref} variant="title">
          {isMobile
            ? '테스트를 통해\n어떤 결과를 원하는지\n작성해 주세요.'
            : '테스트를 통해\n어떤 결과를 원하는지 작성해 주세요.'}
        </Text>
      }
      backgroundTheme={SectionTheme.Gray}
      justifyContent="flex-start"
    >
      {renderModal()}
      <Flex as="form" variant="verticalCentralCenter" mt={isMobile ? 60 : 80} onSubmit={handleBetaSignUpSubmit}>
        <Label mb={35}>
          Q1. 연락처를 기입하면 가장 먼저 테스트를 받아보실수 있습니다.
          {isEmailInput ? (
            <EmailDropdownInput mt={9} domains={['123.com', '345.com']} register={register} />
          ) : (
            <Input {...register('phone')} mt={9} fontSize={14} mr={1} mb="2px" placeholder="휴대폰 번호 입력 해주세요" />
          )}
          <Text variant="underline" textAlign={isMobile ? 'center' : 'right'} mt={2} onClick={handleIsEmailInputToggle}>
            {isEmailInput ? '이메일 대신 휴대폰 번호 적기' : '휴대폰 번호 대신 이메일 적기'}
          </Text>
        </Label>
        <Label>
          Q2. 개발자 성향 검사를 통해 무엇을 알고싶습니까?
          <CountCharactorTextarea mt={9} height={116} {...register('comment')} />
        </Label>
        <Button variant="primary" type="submit" mt={isMobile ? 20 : 30} width={200} height={55} fontWeight={700}>
          테스트 신청하기
        </Button>
        <HorizontalBorderLineBox mt={50}>
          <Text fontSize={14} color="gray.5" fontWeight={700} mb={1}>
            개인 정보 및 수집 정보 이용 안내
          </Text>
          <Text fontSize={14} color="gray.3" textAlign="center">
            이메일 또는 휴대폰 정보 수집 및 작성해주신 정보는 일정기간 후 파기됨을 알려드립니다.
          </Text>
        </HorizontalBorderLineBox>
      </Flex>
    </Section>
  );
};

export default FormSection;
