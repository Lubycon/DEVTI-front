import React, { ReactNode } from 'react';
import { Flex } from 'rebass';

import ProgressBar, { ProgressBarProps } from '~atoms/ProgressBar';

interface PillerGageProps extends ProgressBarProps {
  leftNode: ReactNode;
  rightNode: ReactNode;
}

const PillerGage = ({ leftNode, rightNode, ...progessProps }: PillerGageProps) => (
  <Flex flexDirection="column" width="100%">
    <Flex justifyContent="space-between">
      {leftNode}
      {rightNode}
    </Flex>
    <ProgressBar {...progessProps} />
  </Flex>
);

export default PillerGage;
