import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
import MainNavbar from 'components/MainNavbar';
import { BOTTOM_NAV_HEIGHT } from 'utils/layout';
import media from 'utils/mediaQueries';

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

const TemplateWrapper = ({ data, children }) => (
  <Container>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <MainNavbar logo={data.logo} />
    {children()}
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
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
