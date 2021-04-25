import { Input, Select } from '@rebass/forms';
import React from 'react';
import { Box, Flex, FlexProps } from 'rebass';

interface EmailDropdownProps {
  domains: string[];
}

const EmailDropdown = ({ domains, ...props }: FlexProps & EmailDropdownProps) => (
  <Flex {...props}>
    <Input />
    <Box
      sx={{
        position: 'relative',
        right: '11px',
      }}
    >
      <Select name="email" defaultValue="gmail.com" variant="email_dropdown">
        {domains.map((domain) => (
          <option value="gmail.com" key={domain}>
            @{domain}
          </option>
        ))}
      </Select>
    </Box>
  </Flex>
);

export default EmailDropdown;
