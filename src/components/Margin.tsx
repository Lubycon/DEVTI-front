import React from 'react';
import { margin } from 'styles/theme';

const Margin = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ ...style, margin: `0 ${margin.default}` }}>{children}</div>
);

export default Margin;
