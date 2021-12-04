import React from 'react';
import { margin } from 'styles/theme';

const Margin = ({ children }: { children: React.ReactNode }) => <div style={{ margin: `0 ${margin.default}` }}>{children}</div>;

export default Margin;
