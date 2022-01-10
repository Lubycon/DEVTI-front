import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { Box, Flex, FlexProps } from 'rebass';

import convertDecimalToPercent from '~libs/convertDecimalToPercent';

export interface ProgressBarProps extends FlexProps {
  totalCount: number;
  minCount?: number;
  fillColor?: string;
  barColor?: string;
}

export interface ProgressBarHandle {
  handleIncreaseGage: () => void;
  handleDecreaseGage: () => void;
  resetGage: () => void;
}

const ProgressBar = forwardRef<ProgressBarHandle, ProgressBarProps>(
  ({ totalCount, minCount = 0, fillColor, barColor, ...props }, ref) => {
    const [currentCount, setCurrentCount] = useState(0);

    const resetGage = () => setCurrentCount(0);
    const handleIncreaseGage = () => setCurrentCount(currentCount + 1);
    const handleDecreaseGage = () => setCurrentCount(currentCount - 1);

    useImperativeHandle(ref, () => ({
      handleIncreaseGage,
      handleDecreaseGage,
      resetGage,
    }));

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
  }
);

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
