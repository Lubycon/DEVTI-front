import { Flex, FlexProps, Text } from 'rebass';

interface TextCardProps extends FlexProps {
  emphasize: string;
  sentence: string;
}

const TextCard = ({ emphasize, sentence, ...props }: TextCardProps) => (
  <Flex justifyContent="center" fontSize={22} py={42} bg="blue.1" width="100%" {...props}>
    <Text color="blue.0" fontWeight={700} mr={1}>
      {emphasize}
    </Text>
    <Text>{sentence}</Text>
  </Flex>
);

export default TextCard;
