import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { MAX_WIDTH_PX } from 'utils/layout';
import typography from 'utils/typography';
import Image from 'components/Image';
import media from 'utils/mediaQueries';
import niceGateDoor from 'pdf/cennik-automatyka-do-bram-szlabany-nice.pdf';
import cameAutomatics from 'pdf/cennik_automatyka_wjazdu_2017.pdf';

const { rhythm } = typography;

const pricingCatalogs = [
  [
    {
      name: 'Nice GATE&DOOR',
      description:
        'Systemy automatyzacji, sterowania i kontroli bram wjazdowych oraz drzwi garażowych. Szlabany i stystemy parkingowe, systemy kontroli ruchu pieszych, systemy kontroli dostępu, wideodomofony.',
      href: niceGateDoor,
      imageId: 'niceGateDoor',
      imageAlt: 'Okładka cennika Nice Gate&Door',
    },
    {
      name: 'Came automatyka wjazdu',
      description:
        'Automatyka do bram przesuwnych, skrzydłowych, garażowych. Bariery drogowe, akcesoria sterujące, zabezpieczające, zestawy i kompletacje.',
      href: cameAutomatics,
      imageId: 'cameAutomatics',
      imageAlt: 'Okładka cennika Came automatyka wjazdu',
    },
  ],
];

const PageWrapper = styled.div`
  max-width: ${MAX_WIDTH_PX};
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin: ${rhythm(2.5)} 0 ${rhythm(3.5)};
`;

const ServicesPriceList = styled.div`
  max-width: 32rem;
  margin: 0 auto ${rhythm(1)};
`;

const Catalog = styled.a`
  display: grid;
  grid: 'image desc' / 1fr 2fr;
  padding: ${rhythm(1)} 0;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #d8d8d8;
  border-radius: 2px;
  text-decoration: none;
  color: inherit;

  & + & {
    margin-top: -1px;
  }

  ${media.greaterThan('32rem')`
    padding: 0;
    border-width: 1px;

    & + & {
      margin-top: ${rhythm(1)};
    }
  `};
`;

const RightColumn = styled.div`
  margin: 0 ${rhythm(0.5)} 0 ${rhythm(1)};

  ${media.greaterThan('32rem')`
    margin: ${rhythm(1)} ${rhythm(0.5)} ${rhythm(1)} ${rhythm(1)};
  `};
`;

const PricingPage = ({ data }) => (
  <PageWrapper>
    <Title>Cenniki</Title>
    <ServicesPriceList>
      <h2>Cenniki usług</h2>
      <Link to="/cennik-uslug">
        <h3>Cennik usług ROBSON Robert Myśliński</h3>
      </Link>
      <h2>Cenniki automatyki do bram, szlabanów</h2>
      {pricingCatalogs[0].map(catalog => (
        <Catalog key={catalog.name} href={catalog.href}>
          <Image imageData={data[catalog.imageId]} alt={catalog.imageAlt} />
          <RightColumn>
            <h3>{catalog.name}</h3>
            {catalog.description}
          </RightColumn>
        </Catalog>
      ))}
    </ServicesPriceList>
  </PageWrapper>
);

PricingPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default PricingPage;

export const query = graphql`
  query PricingPageQuery {
    niceGateDoor: imageSharp(id: { regex: "/nice-gate&door/" }) {
      sizes(maxWidth: 767) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    cameAutomatics: imageSharp(
      id: { regex: "/cennik_automatyka_wjazdu_2017/" }
    ) {
      sizes(maxWidth: 767) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
