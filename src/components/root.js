import React from 'react'
import PropTypes from 'prop-types'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`${reset}`

export const Root = ({ children }) => (
  <>
    <GlobalStyle />
    <main>{children}</main>
  </>
)
Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root
