import { Flex, Image, Text } from 'rebass';

import { lubycon } from '~public/assets/icons';

const Footer = () => (
  <Flex
    as="footer"
    sx={{
      bg: '#333333',
      color: '#bdbdbd',
      height: 192,
      fontSize: 12,
      px: 330,
      pt: 120,
      '@media screen and (max-width: 64em)': {
        px: 30,
      },
    }}
  >
    <Flex flex={1} justifyContent="space-between" alignItems="center">
      <Text>© 2021 DEVTI</Text>
      <Image src={lubycon} width={80} height={25} alt="lubycon" />
    </Flex>
  </Flex>
);

export default Footer;
