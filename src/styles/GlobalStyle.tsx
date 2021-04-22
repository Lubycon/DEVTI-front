import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
import React from 'react'

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}
      html,
      body {
        line-height: 1.1;
        font-family: 'Circular Std', 'apple SD gothic Neo', monospace;
        *:focus {
          outline: none;
        }
      }
    `}
  />
)

export default GlobalStyle
