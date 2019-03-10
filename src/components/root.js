import React from 'react'
import PropTypes from 'prop-types'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Styling } from 'components/styling'

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.spacing[16]};
  margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`
  ${reset}
  body, html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Open Sans', -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    line-height: 1.4;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body > * {
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif;
    font-weight: 700;
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
  padding: 0;
`

const Footer = styled.footer`
  padding: 2.4rem;
  margin-top: 2.4rem;
  background-color: #102a43;
  color: #d9e2ec;
  font-size: 1.4rem;
`

const FooterLayout = styled.div`
  display: grid;
  grid-template-areas:
    'address'
    'numbers'
    'contact'
    'legal'
    'copyright';
  grid-column-gap: 3.2rem;
  grid-row-gap: 4.8rem;

  @media (min-width: 40em) {
    grid-template-areas:
      'address address numbers numbers contact contact'
      'copyright copyright copyright legal legal legal';
  }
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
  <Styling>
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
          </Ul>
        </nav>
      </Header>
    <main>{children}</main>
    <Footer>
      <Wrapper>
        <FooterLayout>
          <Address>
            ROBSON Robert Myśliński
            <br />
            ul. Ostrówek 10/11
            <br />
            61-122 Poznań
            <br />
            Poniedziałek - Piątek: 8 - 16
          </Address>
          <div style={{ gridArea: 'numbers' }}>
            NIP: 779 155 10 41
            <br />
            REGON: 630781580
            <br />
            Numer konta: 43 1020 4027 0000 1802 1345 1515
          </div>
          <Contact>
            602 338 508
            <br />
            biuro@robson.com.pl
          </Contact>
          <Copyright>Copyright Ⓒ 2019 ROBSON Robert Myśliński</Copyright>
          <p style={{ gridArea: 'legal', textAlign: 'right' }}>
            Korzystanie z serwisu oznacza akceptację regulaminu
          </p>
        </FooterLayout>
      </Wrapper>
    </Footer>
  </Styling>
)
Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root
