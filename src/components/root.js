import React from 'react'
import PropTypes from 'prop-types'
import reset from 'styled-reset'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { createGlobalStyle } from 'styled-components'
import { Styling } from 'components/styling'
import { space } from 'utils/space'
import { fontSize } from 'utils/fontSize'
import { color } from 'utils/color'
import { remToEm } from 'utils/remToEm'
import { lock } from 'utils/lock'

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
    color: ${color('neutrals', '900')};
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

  b { 
    font-weight: bold;
  }
`

const Ul = styled.ul`
  display: flex;
`

const StyledLink = styled(Link).attrs({ activeClassName: 'active' })`
  text-decoration: none;
  color: inherit;
  display: block;
  font-size: ${fontSize(1)};
  padding: ${space(4)};
  color: ${color('neutrals', '700')};

  &:visited {
    text-decoration: none;
  }

  &.active {
    font-weight: 700;
    color: ${color('neutrals', '900')};
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${space(3)};
  flex-direction: column;

  @media (min-width: ${remToEm(44)}) {
    flex-direction: row;
  }
`

const Footer = styled.footer`
  margin-top: 2.4rem;
  background-color: #102a43;
  color: #d9e2ec;
  font-size: 1.4rem;

  ${lock('padding', [32, space(4)], [96, space(7)])}
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

const Legal = styled.div`
  grid-area: legal;
  text-align: left;

  @media (min-width: ${remToEm(64)}) {
    text-align: right;
  }
`

export const Root = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "robson-logo-light.png" }) {
        childImageSharp {
          fixed(width: 124) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Styling>
      <GlobalStyle />
      <Header>
        <Link style={{ display: 'flex' }} to='/'>
          <Img fixed={data.logoImage.childImageSharp.fixed} />
        </Link>
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
            <Legal>Korzystanie z serwisu oznacza akceptację regulaminu</Legal>
          </FooterLayout>
        </Wrapper>
      </Footer>
    </Styling>
  )
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root
