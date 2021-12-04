import React from 'react';

interface CompositionMembers {
  Row: typeof Row;
}

interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> & CompositionMembers = ({ children }) => <ul>{children}</ul>;

const Row = ({ left, children }: { left?: React.ReactNode; children: React.ReactNode }) => (
  <li>
    <div>{left}</div>
    <div>{children}</div>
  </li>
);

List.Row = Row;

export default List;
