import { Flex, Image, Text } from 'rebass';

interface CardProps {
  imageUrl: string;
  description: string;
  alt: string;
}

const Card = ({ imageUrl, description, alt }: CardProps) => (
  <Flex flexDirection="column" mx={45} alignItems="center">
    <Image src={imageUrl} alt={alt} width={247} />
    <Text mt={40} fontSize={20}>
      {description}
    </Text>
  </Flex>
);

export default Card;
