import { Input, Select } from '@rebass/forms';
import React from 'react';
import { Box, Flex, FlexProps } from 'rebass';

interface EmailDropdownInputProps {
  domains: string[];
}

const EmailDropdownInput = ({ domains, ...props }: FlexProps & EmailDropdownInputProps) => (
  <Flex {...props}>
    <Input />
    <Box
      sx={{
        position: 'relative',
        right: '11px',
      }}
    >
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
