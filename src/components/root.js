import React from 'react'
import PropTypes from 'prop-types'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 12px;
`

const GlobalStyle = createGlobalStyle`
  ${reset}
  body, html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Muli', sans-serif;
    line-height: 1.3;
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
  padding: 24px 0;
`

const Footer = styled.footer`
  border: solid 2px #000;
  padding: 24px;
  margin: 24px 0;
  display: grid;
  grid-template-areas:
    'address  contact'
    'copyright copyright';
  grid-column-gap: 45px;
  grid-row-gap: 50px;
`

const Address = styled.div`
  grid-area: address;
`

const Contact = styled.div`
  grid-area: contact;
`

const Copyright = styled.div`
  grid-area: copyright;
`

export const Root = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <Header>
      <StaticQuery query={logoQuery} render={logoRender} />
      <nav>
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
      </nav>
    </Header>
    <main>{children}</main>
    <Footer>
      <Address>
        ROBSON Robert Myśliński
        <br />
        ul. Ostrówek 10/11
        <br />
        61-122 Poznań
      </Address>
      <Contact>
        602 338 508
        <br />
        biuro@robson.com.pl
      </Contact>
      <Copyright>Copyright Ⓒ 2019 ROBSON Robert Myśliński</Copyright>
    </Footer>
  </Wrapper>
)
Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root
