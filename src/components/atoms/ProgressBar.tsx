import { useMemo } from 'react';
import { Box, Flex, FlexProps } from 'rebass';

import convertDecimalToPercent from '~libs/convertDecimalToPercent';

export interface ProgressBarProps extends FlexProps {
  totalCount: number;
  currentCount?: number;
  minCount?: number;
  fillColor?: string;
  barColor?: string;
}

const ProgressBar = ({ totalCount, currentCount = 0, minCount = 0, fillColor, barColor, ...props }: ProgressBarProps) => {
  const count = useMemo(() => {
    const biggerCount = Math.max(currentCount, minCount);
    return biggerCount > totalCount ? totalCount : biggerCount;
  }, [currentCount, totalCount]);

  const fillWidth = convertDecimalToPercent(count / totalCount);

  return (
    <Flex variant="bar" {...props}>
      <Box variant="gageBar" bg={barColor} />
      <Box variant="gage" bg={fillColor} width={fillWidth} />
    </Flex>
  );
};

export default ProgressBar;
