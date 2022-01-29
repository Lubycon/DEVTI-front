import BarGraph from 'components/BarGraph';
import List from 'components/List';
import Margin from 'components/Margin';
import React from 'react';
import { Flex } from 'rebass';
import { margin } from 'styles/theme';

import Txt from '~atoms/Txt';
import { ReviewList } from '~models/Result';

interface Props {
  title: string;
  bias: { left: string; right: string };
  percentageFromLeft: number;
  summary: string;
  analysisList: ReviewList[];
  highLightColor: string;
  style?: React.CSSProperties;
}

const PillarAnalysis = ({ title, bias, percentageFromLeft, summary, analysisList, highLightColor, style }: Props) => (
  <article style={{ ...style, marginBottom: 24 }}>
    <Margin>
      <Flex justifyContent="space-between" style={{ marginBottom: 8 }}>
        <Txt>{bias.left}</Txt>
        <Txt color={highLightColor} fontWeight={700}>
          {title}
        </Txt>
        <Txt>{bias.right}</Txt>
      </Flex>
      <BarGraph percent={percentageFromLeft} highLightColor={highLightColor} />
      <List title={summary} highLightColor={highLightColor} style={{ marginTop: margin.default }}>
        {analysisList.map((analysis) => (
          <List.Row key={analysis.emoji} left={analysis.emoji}>
            {analysis.contents}
          </List.Row>
        ))}
      </List>
    </Margin>
  </article>
);

export default PillarAnalysis;
