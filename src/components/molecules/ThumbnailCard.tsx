import { Box, Flex } from 'rebass';

import Thumbnail from '../atoms/Thumbnail';

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
        top: '45px',
      }}
    >
      <Thumbnail imageUrl={imageUrl ?? PROFILE} />
    </Box>
    <Box bg="gray.0" p={2} pt={5} width={300} height={300} sx={{ borderRadius: 10 }}>
      <Box height={220} overflowY="scroll">
        {contents}
      </Box>
    </Box>
  </Flex>
);

export default ThumbnailCard;
