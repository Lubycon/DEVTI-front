import { Input, Select } from '@rebass/forms';
import React from 'react';
import { Box, Flex, FlexProps } from 'rebass';

interface EmailDropdownProps {
  emails: string[];
}

const EmailDropdown = ({ emails, ...props }: FlexProps & EmailDropdownProps) => (
  <Flex {...props}>
    <Input />
    <Box
      sx={{
        position: 'relative',
        right: '11px',
      }}
    >
      <Select name="email" defaultValue="gmail.com" variant="email_dropdown">
        {emails.map((email) => (
          <option value="gmail.com" key={email}>
            @{email}
          </option>
        ))}
      </Select>
    </Box>
  </Flex>
);

export default EmailDropdown;
