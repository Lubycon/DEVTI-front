import { Input, Select } from '@rebass/forms';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Box, Flex, FlexProps } from 'rebass';

import { SignUp } from '../../hooks/api/useBetaTestApi';

interface EmailDropdownInputProps extends FlexProps {
  domains: string[];
  placeholder?: string;
  register: UseFormRegister<SignUp & { domain: string }>;
}

const EmailDropdownInput = ({ domains, placeholder, register, ...props }: EmailDropdownInputProps) => (
  <Flex {...props}>
    <Input mr={1} width="100%" placeholder={placeholder ?? '아이디를 입력해주세요'} fontSize={14} {...register('email')} />
    <Box width="100%">
      <Select {...register('domain')} defaultValue={domains[0]} variant="emailDropdown">
        {domains.map((domain) => (
          <option value={domain} key={domain}>
            @{domain}
          </option>
        ))}
      </Select>
    </Box>
  </Flex>
);

export default EmailDropdownInput;
