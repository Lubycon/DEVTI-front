import { Flex, Heading, Text } from 'rebass';

import useProgressBar from '~hooks/useProgressBar';

const Question = () => {
  const { renderProgressBar, handleIncreaseGage } = useProgressBar({ totalCount: 10, minCount: 1 });

  return (
    <Flex variant="question">
      <Flex
        flexDirection="column"
        width="100%"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <Flex justifyContent="space-between" p={3}>
          <Heading>DEVTI</Heading>
          <Text>STEP</Text>
        </Flex>
        {renderProgressBar()}
      </Flex>
      <Text fontSize={12} onClick={handleIncreaseGage}>
        Q2
      </Text>
      <Text fontSize={16}>서비스 사용 플로우나 최적화하는 방법은 최적화 하는 방법은?</Text>
    </Flex>
  );
};

export default Question;
