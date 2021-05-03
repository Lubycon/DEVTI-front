import { Button, Flex, Text } from 'rebass';

const Navigation = () => (
  <Flex as="nav" variant="navigation">
    <Text fontWeight={800} fontSize="30px" flex={2} color="blue.0">
      DEVTI
    </Text>
    <Button variant="blue">검사하기</Button>
  </Flex>
);

export default Navigation;
