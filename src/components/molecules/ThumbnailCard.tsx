import { Flex, Image, Text } from 'rebass';

interface ThumbnailCardProps {
  imageUrl: string;
  description: string;
  alt: string;
}

const ThumbnailCard = ({ imageUrl, description, alt }: ThumbnailCardProps) => (
  <Flex flexDirection="column" mx={45}>
    <Image src={imageUrl} alt={alt} width={247} />
    <Text mt={40} fontSize={20}>
      {description}
    </Text>
  </Flex>
);

export default ThumbnailCard;
