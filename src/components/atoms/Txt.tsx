import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

const Txt = ({ children, display = 'block' }: { children: React.ReactNode; display?: CSSProperties['display'] }) => (
  <StyledSpan display={display}>{children}</StyledSpan>
);

const StyledSpan = styled.span<{ display: CSSProperties['display'] }>`
  display: ${({ display }) => display};
`;

export default Txt;
