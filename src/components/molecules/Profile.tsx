import React from 'react';
import { Flex, Text } from 'rebass';

import Thumbnail, { ThumbnailProps } from '../atoms/Thumbnail';

interface ProfileProps extends ThumbnailProps {
  nickname: string;
}

const Profile = ({ imageUrl, nickname }: ProfileProps) => (
  <Flex flexDirection="column">
    <Thumbnail imageUrl={imageUrl} />
    <Text mt={3} fontSize={16} color="gray.6">
      {nickname}님
    </Text>
  </Flex>
);

export default Profile;
