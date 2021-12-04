import BarGraph from 'components/BarGraph';
import List from 'components/List';
import { Analysis } from 'pages/resultV2';
import React from 'react';
import { Flex } from 'rebass';
import { margin } from 'styles/theme';

import Txt from '~atoms/Txt';

interface Props {
  title: '당신의 개발강점';
  bias: { left: string; right: string };
  percentageFromLeft: number;
  summary: string;
  analysisList: Analysis[];
  highLightColor: string;
}

const PillarAnalysis = ({ title, bias, percentageFromLeft, summary, analysisList, highLightColor }: Props) => (
  <article>
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
          {analysis.text}
        </List.Row>
      ))}
    </List>
  </article>
);

export default PillarAnalysis;
