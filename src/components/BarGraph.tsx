import styled from '@emotion/styled';
import React from 'react';
import { Flex } from 'rebass';
import { colors } from 'styles/theme';

import Txt from '~atoms/Txt';

const BarGraph = ({ percent, highLightColor }: { percent: number; highLightColor: string }) => (
  <Flex
    justifyContent="space-between"
    style={{ height: 24, backgroundColor: colors.grey100, position: 'relative', padding: '0 10px' }}
    alignItems="center"
  >
    <InnerBar percent={percent} highLightColor={highLightColor} />
    <Txt style={{ zIndex: 2 }} color={colors.grey100} typography="t4">
      {percent}%
    </Txt>
    <Txt style={{ zIndex: 2 }} color={colors.grey800} typography="t4">
      {100 - percent}%
    </Txt>
  </Flex>
);

const InnerBar = styled.span<{ percent: number; highLightColor: string }>`
  height: 24px;
  width: ${({ percent }) => percent}%;
  background: ${({ highLightColor }) => highLightColor};
  display: inline-block;
  position: absolute;
  left: 0;
`;

export default BarGraph;
