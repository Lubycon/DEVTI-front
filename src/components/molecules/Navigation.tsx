import { Button, Flex, Text } from 'rebass';

import useScrollTo from '../../hooks/useScrollTo';

const Navigation = () => {
  const { handleExecuteScroll } = useScrollTo('test');

  return (
    <Flex as="nav" variant="navigation">
      <Text fontWeight={800} fontSize="30px" flex={2} color="blue.0">
        DEVTI
      </Text>
      <Button variant="blue" fontWeight={700} onClick={handleExecuteScroll}>
        검사하기
      </Button>
    </Flex>
  );
};

export default Navigation;
