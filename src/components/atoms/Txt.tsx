import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';
import { fontSize } from 'styles/theme';

type Typography = 't1' | 't2' | 't3';

const Txt = ({
  children,
  display = 'block',
  typography = 't3',
  fontWeight = 'normal',
  style,
}: {
  children: React.ReactNode;
  display?: CSSProperties['display'];
  fontWeight?: CSSProperties['fontWeight'];
  typography?: Typography;
  style?: CSSProperties;
}) => (
  <StyledSpan display={display} typography={typography} fontWeight={fontWeight} style={style}>
    {children}
  </StyledSpan>
);

const getFontSizeFromTypography = (typography: Typography) => fontSize[typography];

const StyledSpan = styled.span<{
  display: CSSProperties['display'];
  typography: Typography;
  fontWeight: CSSProperties['fontWeight'];
}>`
  display: ${({ display }) => display};
  font-size: ${({ typography }) => getFontSizeFromTypography(typography)}px;
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default Txt;
