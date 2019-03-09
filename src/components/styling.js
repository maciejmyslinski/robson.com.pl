import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  spacing: [
    '0.4rem',
    '0.8rem',  // 1
    '1.2rem',
    '1.6rem',
    '2.4rem',  // 4
    '3.2rem',
    '4.8rem',
    '6.4rem',
    '9.6rem',  // 8
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
}

export const Styling = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
