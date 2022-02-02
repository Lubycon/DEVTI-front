import styled from '@emotion/styled';
import { Flex } from 'rebass';
import { colors } from 'styles/theme';

import Txt from '~atoms/Txt';

const TypePersentage = () => (
  <Wrapper>
    <Txt
      typography="t3"
      fontWeight={700}
      color={colors.grey100}
      style={{
        marginRight: 12,
      }}
    >
      1위
    </Txt>
    <Flex flex={1} flexDirection="row" justifyContent="space-between">
      <Txt typography="t3" fontWeight={500} color={colors.grey100}>
        시각화/프로덕트/스타트업/워라하
      </Txt>
      <Txt typography="t3" fontWeight={500} color={colors.grey200}>
        32%
      </Txt>
    </Flex>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export default TypePersentage;
