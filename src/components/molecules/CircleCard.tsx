import { Flex, Image, Text } from 'rebass';

interface CircleCardProps {
  imageUrl: string;
  description: string;
  alt: string;
}

const CircleCard = ({ imageUrl, description, alt }: CircleCardProps) => (
  <Flex flexDirection="column" mx={45}>
    <Image src={imageUrl} alt={alt} width={247} />
    <Text mt={40} fontSize={20}>
      {description}
    </Text>
  </Flex>
);

export default CircleCard;
