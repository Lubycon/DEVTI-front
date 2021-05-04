import { Flex, Text } from 'rebass';

const Footer = () => (
  <Flex
    as="footer"
    sx={{
      bg: '#333333',
      color: '#bdbdbd',
      height: 192,
      fontSize: 12,
    }}
  >
    <Text>© 2021 DEVTI</Text>
  </Flex>
);

export default Footer;
