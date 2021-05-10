import { Input, Select } from '@rebass/forms';
import React, { useEffect, useRef, useState } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { Box, Flex, FlexProps } from 'rebass';

import { SignUp } from '../../hooks/api/useBetaTestApi';

interface EmailDropdownInputProps extends FlexProps {
  domains: string[];
  placeholder?: string;
  register: UseFormRegister<SignUp & { domain: string }>;
  setValue: UseFormSetValue<SignUp & { domain: string }>;
}

const EmailDropdownInput = ({ domains, placeholder, register, setValue, ...props }: EmailDropdownInputProps) => {
  const [toggleDomainInput, setToggleDomainInput] = useState(false);

  const selectEl = useRef<HTMLSelectElement>();
  const inputEl = useRef<HTMLInputElement>();

  const { ref, ...rest } = register('domain');

  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = e;

    if (value === '직접 입력') {
      inputEl.current?.focus();
      setToggleDomainInput(true);
      setValue('domain', '');
    }
  };

  useEffect(() => {
    if (selectEl.current?.value === '') {
      setToggleDomainInput(true);
    }
  }, []);

  return (
    <Flex {...props} variant="horizontalCentralCenter">
      <Input mr={3} width="100%" placeholder={placeholder ?? '아이디를 입력해주세요'} fontSize={14} {...register('email')} />@
      <Box width="100%" ml={1}>
        {toggleDomainInput ? (
          <Input
            {...rest}
            ref={(e) => {
              ref(e);
              inputEl.current = e;
            }}
            placeholder="이메일 입력"
          />
        ) : (
          <Select
            {...rest}
            ref={(e) => {
              ref(e);
              selectEl.current = e;
            }}
            defaultValue={domains[1]}
            variant="emailDropdown"
            onChange={handleClick}
          >
            {domains.map((domain) => (
              <option value={domain} key={domain}>
                {domain}
              </option>
            ))}
          </Select>
        )}
      </Box>
    </Flex>
  );
};

export default EmailDropdownInput;
