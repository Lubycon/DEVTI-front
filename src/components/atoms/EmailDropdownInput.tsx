import { Input, Select } from '@rebass/forms';
import React from 'react';
import { Box, Flex, FlexProps } from 'rebass';

interface EmailDropdownInputProps extends FlexProps {
  domains: string[];
  placeholder?: string;
}

const EmailDropdownInput = ({ domains, placeholder, ...props }: EmailDropdownInputProps) => (
  <Flex {...props}>
    <Input mr={1} width="100%" placeholder={placeholder ?? '아이디를 입력해주세요'} fontSize={14} />
    <Box width="100%">
      <Select name="email" defaultValue={domains[0]} variant="email_dropdown">
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
