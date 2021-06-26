import { Flex, FlexProps, Text } from 'rebass';

interface TextCardProps extends FlexProps {
  emphasize: string;
  sentence: string;
}

const TextCard = ({ emphasize, sentence, ...props }: TextCardProps) => (
  <Flex variant="textCard" {...props}>
    <Text color="primary" fontWeight={700} mr={1}>
      {emphasize}
    </Text>
    <Text>{sentence}</Text>
  </Flex>
);

export default TextCard;
