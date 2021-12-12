import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import React from 'react';

import { colors, fontSize } from './theme';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}
      html,
      body {
        line-height: 1.5;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif', 'apple SD gothic Neo', monospace;
        *:focus {
          outline: none;
        }
        * {
          box-sizing: border-box;
        }
        background: ${colors.background};
        color: ${colors.fontDefault};
        font-size: ${fontSize.t3};
      }
    `}
  />
);

export default GlobalStyle;
