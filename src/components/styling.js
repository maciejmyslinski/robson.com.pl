import React from 'react'
import { node } from 'prop-types'
import { ThemeProvider } from 'styled-components'

const theme = {
  spacing: [
    '0.4rem',
    '0.8rem',
    '1.2rem',
    '1.6rem',
    '2.4rem', // 4
    '3.2rem',
    '4.8rem',
    '6.4rem',
    '9.6rem', // 8
    '12.8rem',
    '19.2rem',
    '25.6rem',
    '38.4rem', // 12
    '51.2rem',
    '64.0rem',
    '76.8rem',
    '96.0rem', // 16
    '120.0rem',
  ],

  fontSizes: [
    '1.2rem',
    '1.4rem',
    '1.6rem',
    '1.8rem',
    '2.0rem', // 4
    '2.4rem',
    '3.0rem',
    '3.6rem',
    '4.8rem', // 8
    '6.0rem',
    '7.2rem',
  ],

  fontFamilies: {
    sansSerif: `'Open Sans', -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif`,
  },

  colors: {
    secondary: {
      '900': 'hsla(15, 86%, 30%, 1)',
      '500': 'hsla(42, 87%, 55%, 1)',
      '400': 'hsla(44, 92%, 63%, 1)',
    },
    neutrals: {
      '900': 'hsla(209, 61%, 16%, 1)',
      '800': 'hsla(211, 39%, 23%, 1)',
      '700': 'hsla(209, 34%, 30%, 1)',
      '100': 'hsla(193, 34%, 80%, 1)',
    },
  },

  levels: [
    '0 0.1rem 0.3rem hsla(0, 0%, 0%, 0.2)',
    '0 0.4rem 0.6rem hsla(0, 0%, 0%, 0.2)',
    '0 0.5rem 1.5rem hsla(0, 0%, 0%, 0.2)',
    '0 1.0rem 2.4rem hsla(0, 0%, 0%, 0.2)',
    '0 1.5rem 3.5rem hsla(0, 0%, 0%, 0.2)',
  ],
}

export const Styling = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>{children}</div>
  </ThemeProvider>
)

Styling.propTypes = {
  children: node.isRequired,
}
