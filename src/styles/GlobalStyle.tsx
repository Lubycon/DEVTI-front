import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import React from 'react';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}
      :root {
        --app-height: 100%;
      }
      html,
      body {
        line-height: 1.1;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif', 'apple SD gothic Neo', monospace;
        *:focus {
          outline: none;
        }
      }
      ::-webkit-scrollbar {
        display: none;
      }
    `}
  />
);

export default GlobalStyle;
