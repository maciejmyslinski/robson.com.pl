import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { MAX_WIDTH_PX } from 'utils/layout';
import typography from 'utils/typography';

const { rhythm } = typography;

const PageWrapper = styled.div`
  max-width: ${MAX_WIDTH_PX};
  margin: 0 auto;
  padding: 0 ${rhythm(1)};
`;

const Title = styled.h1`
  text-align: center;
  margin: ${rhythm(2.5)} 0 ${rhythm(3.5)};
`;

const ServicesPriceList = styled.div`
  max-width: 32rem;
  margin: 0 auto ${rhythm(1)};
`;

const PricingPage = () => (
  <PageWrapper>
    <Title>Cenniki</Title>
    <ServicesPriceList>
      <Link to="/cennik-uslug">Cennik usług ROBSON Robert Myśliński</Link>
    </ServicesPriceList>
  </PageWrapper>
);

export default PricingPage;
