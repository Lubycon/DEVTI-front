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
      <Flex flexDirection="column">
        <Flex mb={9} flexDirection="row">
          상호명 EP4<Text mx={2}>|</Text>대표 김상혁<Text mx={2}>|</Text>이메일 devti.official@gmail.com
        </Flex>
        <Text>COPYRIGHT (c) devti.kr ALL RIGHTS RESERVED. </Text>
      </Flex>
      <Image src={lubycon} width={80} height={25} alt="lubycon" />
    </Flex>
  </Flex>
);

export default Footer;
