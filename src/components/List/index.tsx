import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';
import { colors } from 'styles/theme';

import Txt from '~atoms/Txt';

interface CompositionMembers {
  Row: typeof Row;
}

interface ListProps {
  children: React.ReactNode;
  title?: string;
  highLightColor?: string;
  style?: CSSProperties;
}

const List: React.FC<ListProps> & CompositionMembers = ({ title, children, highLightColor, style }) => {
  if (title !== undefined) {
    return (
      <ListWrapper style={style}>
        <Txt typography="t2" fontWeight={700} style={{ marginBottom: 20 }}>
          <Txt display="inline" color={highLightColor ?? 'inherit'}>
            {title}
          </Txt>
          <Txt display="inline" style={{ marginLeft: 3 }}>
            &#123; {/* 여는 중괄호 유니코드 */}
          </Txt>
        </Txt>
        <Ul>{children}</Ul>
        <Txt typography="t2" fontWeight={700}>
          &#125;&#59; {/* 닫는 중괄호, 세미콜론 유니코드 */}
        </Txt>
      </ListWrapper>
    );
  }
  return (
    <ListWrapper>
      <Ul>{children}</Ul>
    </ListWrapper>
  );
};

const ListWrapper = styled.div``;

const Ul = styled.ul`
  border-left: 1px solid ${colors.grey400};
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
