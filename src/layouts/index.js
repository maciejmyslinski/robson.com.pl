import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled, { injectGlobal } from 'styled-components';
import MainNavbar from 'components/MainNavbar';
import { BOTTOM_NAV_HEIGHT } from 'utils/layout';
import media from 'utils/mediaQueries';
import typography from 'utils/typography';
import { CORNFLOWER } from 'utils/colors';
import { MAX_WIDTH_PX } from 'utils/layout';

const { rhythm } = typography;

// eslint-disable-next-line
injectGlobal`
  body, html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const Container = styled.div`
  padding: 0 0 ${BOTTOM_NAV_HEIGHT} 0;

  ${media.greaterThan('medium')`
    padding: 0;
  `};
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${rhythm(3)} ${rhythm(1)} ${rhythm(2)};
  background: #5c5c5c;
  color: #fff;
`;

const FooterInner = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: ${MAX_WIDTH_PX};
  width: 100%;

  ${media.greaterThan('medium')`
    flex-flow: row nowrap;

    & > * {
      flex: 1 1;
    }

    & > *:not(:last-child) {
      padding-right: ${rhythm(1)};
    }
  `};
`;

const FooterLink = styled(Link)`
  color: ${CORNFLOWER};
  text-decoration: none;
`;

const FooterA = FooterLink.withComponent('a');

const TemplateWrapper = ({ data, children }) => (
  <Container>
    <Helmet
      title="Sprężyny Do Bram, Serwis Bram Garażowych w Poznaniu | ROBSON Robert Myśliński"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#424242" />
      <meta name="theme-color" content="#424242" />
    </Helmet>
    <MainNavbar logo={data.logo} />
    {children()}
    <Footer>
      <FooterInner>
        <p>
          ROBSON Robert Myśliński<br />
          ul. Ostrówek 10/11<br />
          61-122 Poznań<br />
          <FooterA href="tel:+48602338508">602 338 508</FooterA>
          <br />
          <FooterA href="mailto:biuro@robson.com.pl">
            biuro@robson.com.pl
          </FooterA>
        </p>
        <p>
          Ta strona używa plików cookies.<br />
          Korzystając ze strony akceptujesz{' '}
          <FooterLink to="/regulamin">regulamin strony</FooterLink>.<br />
          Copyright © 2017 ROBSON Robert Myśliński
        </p>
      </FooterInner>
    </Footer>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700&amp;subset=latin-ext"
      rel="stylesheet"
    />
  </Container>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    logo: PropTypes.shape({}),
  }).isRequired,
};

TemplateWrapper.defaultProps = {
  children: null,
};

export default TemplateWrapper;

export const query = graphql`
  query MainLayoutQuery {
    logo: imageSharp(id: { regex: "/logo/" }) {
      resolutions(width: 198) {
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  }
`;
