import { Button, Flex, Text } from 'rebass';

import useDeviceDetect from '../../hooks/useDeviceDetect';

const Navigation = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <Flex as="nav" variant="navigation">
      <Text fontWeight={800} fontSize="30px" flex={2} color="blue.0">
        DEVTI
      </Text>
      {!isMobile && <Button variant="blue">검사하기</Button>}
    </Flex>
  );
};

export default Navigation;
