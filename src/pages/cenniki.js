import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MAX_WIDTH_PX } from 'utils/layout';
import typography from 'utils/typography';
import Image from 'components/Image';
import media from 'utils/mediaQueries';
import niceGateDoor from 'pdf/cennik-automatyka-do-bram-szlabany-nice.pdf';
import cameAutomatics from 'pdf/cennik_automatyka_wjazdu_2017.pdf';
import niceGarage from 'pdf/cennik-bram-garazowych-nice.pdf';
import krispolHome from 'pdf/cennik-bram-garazowych-krispol.pdf';
import krispolIndustrial from 'pdf/cennik-przemyslowych-bram-garazowych-krispol.pdf';
import krispolRollingDoors from 'pdf/cennik-bram-i-krat-rolowanych-krispol.pdf';
import nicePark from 'pdf/NicePark-cennik-systemu-parkingowego.pdf';
import camePark from 'pdf/cennik-systemu-parkingowego-came.pdf';
import cameIntercom from 'pdf/cennik-domofonow-audio-i-video-came.pdf';
import cameTurnstile from 'pdf/cennik-automatyki-przejscia-came.pdf';

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
  [
    {
      name: 'Nice bramy dla domu i przemysłu',
      description:
        'Bramy garażowe i przemysłowe firmy Nice. 33 956 kombinacji dostępnych wymiarów, w tym nawet 88 wymiarów standardowych.',
      href: niceGarage,
      imageId: 'niceGarage',
      imageAlt: 'Okładka cennika Nice bramy garażowe',
    },
    {
      name: 'Krispol bramy dla domu',
      description:
        'Produkty KRISPOL dają całkowitą swobodę wyboru koloru wszystkich elementów stolarki otworowej. Bramy garażowe można dokładnie dopasować do okien, rolet zewnętrznych i drzwi wejściowych.',
      href: krispolHome,
      imageId: 'krispolHome',
      imageAlt: 'Okładka cennika Krispol domowych bram garażowych',
    },
    {
      name: 'Krispol przemysłowe bramy segmentowe',
      description:
        'Nieważne, czy mówimy o małym warsztacie, czy o wielkopowierzchniowej hali magazynowej. W przypadku każdej inwestycji tak samo ważne jest, aby stworzyć bezpieczne i komfortowe warunki dla rozwoju biznesu.',
      href: krispolIndustrial,
      imageId: 'krispolIndustrial',
      imageAlt:
        'Okładka cennika Krispol przemysłowych segmentowych bram garażowych',
    },
    {
      name: 'Krispol bramy i kraty rolowane',
      description:
        'Główną zaletą bram rolowanych jest ich konstrukcja. Pancerz bramy zwijany jest na wał umieszczony nad otworem, dzięki temu przestrzeń pod sufitem hali pozostaje wolna. To ważne, gdy kluczowa jest wysokość pomieszczeń.',
      href: krispolRollingDoors,
      imageId: 'krispolRollingDoors',
      imageAlt: 'Okładka cennika Krispol bram i krat rolowanych',
    },
  ],
  [
    {
      name: 'NicePark system parkingowy',
      description:
        'Dzięki komputerowemu zapisowi danych o wszystkich biletach dokładnie wiadomo, ilu kierowców skorzystało z parkingu oraz jaka kwota powinna znaleźć się w kasie.',
      href: nicePark,
      imageId: 'nicePark',
      imageAlt: 'Okładka cennika systemu parkingowego NicePark',
    },
    {
      name: 'Came system parkingowy',
      description:
        'Came stawia na rozwój nowych technologii czego dowodem są kamery odczytu tablic rejestracyjnych oraz system kamer inspekcyjnych, które mogą służyć do sprawdzania czy pod pojazdem nie są ukryte niebezpieczne lub nielegalne ładunki lub po prostu być dowodem w razie uszkodzenia samochodu podczas parkowania.',
      href: camePark,
      imageId: 'camePark',
      imageAlt: 'Okładka cennika systemu parkingowego Came',
    },
  ],
  [
    {
      name: 'Came domofony audio i video',
      description:
        'Dzięki odpowiedniej aplikacji, za pomocą kliku kliknięć, możesz całkowicie bezpiecznie połączyć się i kontrolować stan wszystkich pomieszczeń, obrazy z kamer, a także aktywować scenariusze, sterować różnymi urządzeniami i w prosty sposób zdalnie zarządzać swoim domem w prosty sposób za pośrednictwem smartfonu, tabletu czy komputera.',
      href: cameIntercom,
      imageId: 'cameIntercom',
      imageAlt: 'Okładka cennika domofonów audio i video firmy Came',
    },
    {
      name: 'Came automatyka przejścia',
      description:
        'Tripody, bramki mechaniczne i elektromechaniczne, systemy konktoli dostępu, automatyka do drzwi.',
      href: cameTurnstile,
      imageId: 'cameTurnstile',
      imageAlt: 'Okładka cennika automatyki przejścia firmy Came',
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

const Catalog = ({ className, catalog, imageData }) => (
  <a className={className} href={catalog.href}>
    <Image imageData={imageData} alt={catalog.imageAlt} />
    <RightColumn>
      <h3>{catalog.name}</h3>
      {catalog.description}
    </RightColumn>
  </a>
);

Catalog.propTypes = {
  className: PropTypes.string,
  catalog: PropTypes.shape({}).isRequired,
  imageData: PropTypes.shape({}).isRequired,
};

const StyledCatalog = styled(Catalog)`
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

const StyledPageCatalog = StyledCatalog.withComponent(Link);

const CatalogListing = styled.div`
  margin: ${rhythm(3)} 0 0;
`;

const ListingTitle = styled.h2`
  text-align: center;
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
      <CatalogListing>
        <StyledPageCatalog to="/cennik-uslug">
          <Image imageData={data.robsonPricing} alt="" />
          <RightColumn>
            <h3>Cennik usług ROBSON Robert Myśliński</h3>
          </RightColumn>
        </StyledPageCatalog>
      </CatalogListing>
      <CatalogListing>
        <ListingTitle>Cenniki automatyki do bram, szlabanów</ListingTitle>
        {pricingCatalogs[0].map(catalog => (
          <StyledCatalog
            key={catalog.name}
            catalog={catalog}
            imageData={data[catalog.imageId]}
          />
        ))}
      </CatalogListing>
      <CatalogListing>
        <ListingTitle>Cenniki bram garażowych</ListingTitle>
        {pricingCatalogs[1].map(catalog => (
          <StyledCatalog
            key={catalog.name}
            catalog={catalog}
            imageData={data[catalog.imageId]}
          />
        ))}
      </CatalogListing>
      <CatalogListing>
        <ListingTitle>Cenniki systemów parkingowych</ListingTitle>
        {pricingCatalogs[2].map(catalog => (
          <StyledCatalog
            key={catalog.name}
            catalog={catalog}
            imageData={data[catalog.imageId]}
          />
        ))}
      </CatalogListing>
      <CatalogListing>
        <ListingTitle>Cenniki domofonów i automatyki przejścia</ListingTitle>
        {pricingCatalogs[3].map(catalog => (
          <StyledCatalog
            key={catalog.name}
            catalog={catalog}
            imageData={data[catalog.imageId]}
          />
        ))}
      </CatalogListing>
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
      sizes(maxWidth: 213) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    cameAutomatics: imageSharp(
      id: { regex: "/cennik_automatyka_wjazdu_2017/" }
    ) {
      sizes(maxWidth: 213) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    niceGarage: imageSharp(id: { regex: "/nice-bramy-garazowe/" }) {
      sizes(maxWidth: 213) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    krispolHome: imageSharp(id: { regex: "/krispol-bramy-garazowe/" }) {
      sizes(maxWidth: 213) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    krispolIndustrial: imageSharp(
      id: { regex: "/krispol-bramy-przemyslowe/" }
    ) {
      sizes(maxWidth: 213) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    krispolRollingDoors: imageSharp(
      id: { regex: "/krispol-bramy-i-kraty-rolowane/" }
    ) {
      sizes(maxWidth: 213) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    nicePark: imageSharp(id: { regex: "/nicepark-system-parkingowy/" }) {
      sizes(maxWidth: 213) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    camePark: imageSharp(id: { regex: "/cennik-systemu-parkingowego-came/" }) {
      sizes(maxWidth: 213) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    cameIntercom: imageSharp(
      id: { regex: "/okladka-cennika-domofonow-audio-i-video-came/" }
    ) {
      sizes(maxWidth: 213) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    cameTurnstile: imageSharp(
      id: { regex: "/okladka-cennika-automatyki-przejscia-came/" }
    ) {
      sizes(maxWidth: 213) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    robsonPricing: imageSharp(id: { regex: "/cennik-uslug-robson/" }) {
      sizes(maxWidth: 213) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
