import { Box, Flex, Text } from 'rebass';

import Profile from './Profile';

interface ThumbnailCardProps {
  imageUrl?: string;
  contents: string;
}

const PROFILE = 'https://www.w3schools.com/howto/img_avatar.png';

const ThumbnailCard = ({ imageUrl, contents }: ThumbnailCardProps) => (
  <Flex flexDirection="column" alignItems="center">
    <Box
      sx={{
        position: 'relative',
        top: '78px',
      }}
    >
      {/* FIXME */}
      <Profile imageUrl={imageUrl ?? PROFILE} nickname="dev****" />
    </Box>
    <Box
      bg="white"
      p={3}
      pt={100}
      width={300}
      height={300}
      sx={{ borderRadius: 10, boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.1)' }}
    >
      <Box height={188} overflowY="scroll">
        <Text font-size={16} color="blue.0" fontWeight="bold" mb={2}>
          취준생 / front-end
        </Text>
        <Text as="p" color="gray.3" fontWeight={400} fontSize={16}>
          {contents}
        </Text>
      </Box>
    </Box>
  </Flex>
);

export default ThumbnailCard;
