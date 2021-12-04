import styled from '@emotion/styled';
import React, { Component } from 'react';
import { colors, margin } from 'styles/theme';

import Txt from '~atoms/Txt';

interface CompositionMembers {
  Row: typeof Row;
}

interface ListProps {
  children: React.ReactNode;
  title?: string;
}

const List: React.FC<ListProps> & CompositionMembers = ({ title, children }) => (
  <ListWrapper>
    <Txt>{title}</Txt>
    <Ul>{children}</Ul>
  </ListWrapper>
);

const ListWrapper = styled.div`
  padding: 0 ${margin.default};
`;
const Ul = styled.ul`
  border-left: 1px solid ${colors.grey300};
  padding-left: 17px;
`;

const Row = ({ left, children }: { left?: React.ReactNode; children: React.ReactNode }) => (
  <Li>
    <div style={{ marginRight: 12 }}>{left}</div>
    <div>{children}</div>
  </Li>
);

const Li = styled.li`
  display: flex;
  margin-bottom: 12px;
`;

List.Row = Row;

export default List;
