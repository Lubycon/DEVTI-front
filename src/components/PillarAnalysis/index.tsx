import List from 'components/List';
import { Analysis } from 'pages/resultV2';
import React from 'react';

import Txt from '~atoms/Txt';

interface Props {
  title: '당신의 개발강점';
  bias: { left: string; right: string };
  percentageFromLeft: number;
  summary: string;
  analysisList: Analysis[];
}

const PillarAnalysis = ({ title, bias, percentageFromLeft, summary, analysisList }: Props) => (
  <article>
    <Txt>{bias.left}</Txt>
    <Txt>{title}</Txt>
    <Txt>{percentageFromLeft}</Txt>
    <Txt>{bias.right}</Txt>
    <List title={summary}>
      {analysisList.map((analysis) => (
        <List.Row key={analysis.emoji} left={analysis.emoji}>
          {analysis.text}
        </List.Row>
      ))}
    </List>
  </article>
);

export default PillarAnalysis;
