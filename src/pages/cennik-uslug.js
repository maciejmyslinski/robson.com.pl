import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MAX_WIDTH_PX } from 'utils/layout';
import typography from 'utils/typography';
import { pricing, pricingDetails } from 'site-data';
import Images from 'components/Images';

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

const ServiceName = styled.h3`
  margin: ${rhythm(1.75)} 0 0;
  font-size: ${17 / 16}rem;
  line-height: ${rhythm(1)};
`;

const Price = styled.p`
  font-style: italic;
  margin: 0;
  font-size: ${15 / 16}rem;
`;

const Description = styled.div`
  margin: ${rhythm(0.25)} 0 0;
`;

const ImagesWrapper = styled.div`
  margin: ${rhythm(3)} 0;
`;

const PricingPage = ({ data }) => (
  <PageWrapper>
    <Title>Cennik usług ROBSON Robert Myśliński</Title>
    <ServicesPriceList>
      {pricing.map(entry => (
        <div key={entry.name}>
          <ServiceName>{entry.name}</ServiceName>
          <Price>{entry.price}</Price>
          <Description>{entry.description}</Description>
        </div>
      ))}
      <ImagesWrapper>
        <Images
          images={[
            {
              ...data.smilingMan,
              alt: 'Uśmiechnięty mężczyzna ze szlifierką kątową w dłoni',
            },
          ]}
        />
      </ImagesWrapper>
      <h2>Uwagi dodatkowe</h2>
      {pricingDetails.map(entry => (
        <div key={entry.name}>
          <ServiceName>{entry.name}</ServiceName>
          <Description>{entry.description}</Description>
        </div>
      ))}
    </ServicesPriceList>
  </PageWrapper>
);

PricingPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default PricingPage;

export const query = graphql`
  query ServicesPricingPageQuery {
    smilingMan: imageSharp(
      id: { regex: "/usmiechniety-mezczyzna-ze-szlifierka-katowa/" }
    ) {
      sizes(maxWidth: 767) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
