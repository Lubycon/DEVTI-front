import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';
import { fontSize } from 'styles/theme';

type Typography = 't1' | 't2' | 't3' | 't4';

const Txt = ({
  children,
  display,
  typography,
  fontWeight,
  color,
  style,
}: {
  children: React.ReactNode;
  display?: CSSProperties['display'];
  color?: CSSProperties['color'];
  fontWeight?: CSSProperties['fontWeight'];
  typography?: Typography;
  style?: CSSProperties;
}) => (
  <StyledSpan display={display} typography={typography} fontWeight={fontWeight} style={style} color={color}>
    {children}
  </StyledSpan>
);

const getFontSizeFromTypography = (typography: Typography) => fontSize[typography];

const StyledSpan = styled.span<{
  display?: CSSProperties['display'];
  typography?: Typography;
  fontWeight?: CSSProperties['fontWeight'];
  color?: CSSProperties['color'];
}>`
  display: ${({ display }) => display ?? 'inherit'};
  color: ${({ color }) => color ?? 'inherit'};
  font-size: ${({ typography }) => (typography !== undefined ? `${getFontSizeFromTypography(typography)}px` : 'inherit')};
  font-weight: ${({ fontWeight }) => fontWeight ?? 'inherit'};
`;

export default Txt;
