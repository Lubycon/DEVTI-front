import { Button, Flex, Text } from 'rebass';

const Navigation = () => (
  <Flex as="nav" variant="navigation">
    <Text fontWeight={800} fontSize="30px" flex={2}>
      DEVTI
    </Text>
    <Flex as="ul" flex={1} justifyContent="space-around" alignItems="center">
      <Text as="li">무언가</Text>
      <Text as="li">무언가</Text>
      <Text as="li">무언가</Text>
      <Button variant="dark">검사하기</Button>
    </Flex>
  </Flex>
);

export default Navigation;
