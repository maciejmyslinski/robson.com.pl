import React from 'react'
import PropTypes from 'prop-types'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${reset}
  body, html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const logoQuery = graphql`
  query {
    logoImage: file(relativePath: { eq: "robson-logo-light.png" }) {
      childImageSharp {
        fixed(width: 124) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`

const logoRender = data => {
  return (
    <Link to='/'>
      <Img fixed={data.logoImage.childImageSharp.fixed} />
    </Link>
  )
}

const Nav = styled.nav`
  font-family: 'Muli', sans-serif;
`

const Ul = styled.ul`
  display: flex;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  font-size: 14px;
  padding: 14px;

  &:visited {
    text-decoration: none;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 960px;
  margin: 0 auto;
`

export const Root = ({ children }) => (
  <>
    <GlobalStyle />
    <Header>
      <StaticQuery query={logoQuery} render={logoRender} />
      <Nav>
        <Ul>
          <li>
            <StyledLink to='/serwis'>Serwis</StyledLink>
          </li>
          <li>
            <StyledLink to='/sprezyny-do-bram'>Sprężyny</StyledLink>
          </li>
          <li>
            <StyledLink to='/cenniki'>Cenniki</StyledLink>
          </li>
          <li>
            <StyledLink to='/kontakt'>Kontakt</StyledLink>
          </li>
        </Ul>
      </Nav>
    </Header>
    <main>{children}</main>
  </>
)
Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root
