import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Root } from 'components/root'
import SEO from 'components/seo'

const IndexPage = () => (
  <ThemeProvider theme={{}}>
    <Root>
      <SEO keywords={[`gatsby`, `application`, `react`]} title='Home' />
      <h1>hello world</h1>
    </Root>
  </ThemeProvider>
)
export default IndexPage
