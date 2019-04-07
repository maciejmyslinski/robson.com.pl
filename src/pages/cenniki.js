import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { space } from 'utils/space'
import { Root } from 'components/root'
import { remToEm } from 'utils/remToEm'
import { fontSize } from 'utils/fontSize'
import { lock } from 'utils/lock'

const pricingDocs = [
  {
    to: '#',
    name: 'Cennik usług ROBSON Robert Myśliński',
    description: 'Zapewniamy również miłą obsługę!',
    img: '#',
  },
  {
    to: '#',
    name: 'Nice GATE & DOOR',
    description:
      'Systemy automatyzacji, sterowania i kontroli bram wjazdowych oraz drzwi garażowych. Szlabany i stystemy parkingowe, systemy kontroli ruchu pieszych, systemy kontroli dostępu, wideodomofony.',
    img: '#',
  },
  {
    to: '#',
    name: 'Came automatyka wjazdu',
    description:
      'Automatyka do bram przesuwnych, skrzydłowych, garażowych. Bariery drogowe, akcesoria sterujące, zabezpieczające, zestawy i kompletacje.',
    img: '#',
  },
  {
    to: '#',
    name: 'Nice bramy dla domu i przemysłu',
    description:
      'Bramy garażowe i przemysłowe firmy Nice. 33 956 kombinacji dostępnych wymiarów, w tym nawet 88 wymiarów standardowych.',
    img: '#',
  },
  {
    to: '#',
    name: 'Krispol bramy dla domu',
    description:
      'Produkty KRISPOL dają całkowitą swobodę wyboru koloru wszystkich elementów stolarki otworowej. Bramy garażowe można dokładnie dopasować do okien, rolet zewnętrznych i drzwi wejściowych.',
    img: '#',
  },
  {
    to: '#',
    name: 'Krispol przemysłowe bramy segmentowe',
    description:
      'Nieważne, czy mówimy o małym warsztacie, czy o wielkopowierzchniowej hali magazynowej. W przypadku każdej inwestycji tak samo ważne jest, aby stworzyć bezpieczne i komfortowe warunki dla rozwoju biznesu.',
    img: '#',
  },
  {
    to: '#',
    name: 'Krispol bramy i kraty rolowane',
    description:
      'Główną zaletą bram rolowanych jest ich konstrukcja. Pancerz bramy zwijany jest na wał umieszczony nad otworem, dzięki temu przestrzeń pod sufitem hali pozostaje wolna. To ważne, gdy kluczowa jest wysokość pomieszczeń.',
    img: '#',
  },
  {
    to: '#',
    name: 'NicePark system parkingowy',
    description:
      'Dzięki komputerowemu zapisowi danych o wszystkich biletach dokładnie wiadomo, ilu kierowców skorzystało z parkingu oraz jaka kwota powinna znaleźć się w kasie.',
    img: '#',
  },
  {
    to: '#',
    name: 'Came system parkingowy',
    description:
      'Came stawia na rozwój nowych technologii czego dowodem są kamery odczytu tablic rejestracyjnych oraz system kamer inspekcyjnych, które mogą służyć do sprawdzania czy pod pojazdem nie są ukryte niebezpieczne lub nielegalne ładunki lub po prostu być dowodem w razie uszkodzenia samochodu podczas parkowania.',
    img: '#',
  },
  {
    to: '#',
    name: 'Came domofony audio i video',
    description:
      'Dzięki odpowiedniej aplikacji, za pomocą kliku kliknięć, możesz całkowicie bezpiecznie połączyć się i kontrolować stan wszystkich pomieszczeń, obrazy z kamer, a także aktywować scenariusze, sterować różnymi urządzeniami i w prosty sposób zdalnie zarządzać swoim domem w prosty sposób za pośrednictwem smartfonu, tabletu czy komputera.',
    img: '#',
  },
  {
    to: '#',
    name: 'Came automatyka przejścia',
    description:
      'Tripody, bramki mechaniczne i elektromechaniczne, systemy konktoli dostępu, automatyka do drzwi.',
    img: '#',
  },
]

const Wrapper = styled.main`
  display: grid;
  grid-gap: ${space(4)};
  max-width: ${space(14)};
  padding: ${space(8)} ${space(4)};
  margin: 0 auto;

  @media (min-width: ${remToEm(92)}) {
    max-width: ${space(17)};
    grid-template-columns: 1fr 1fr;
  }
`

const HeroWrapper = styled.div`
  position: relative;
  padding-right: ${space(2)};
  padding-left: ${space(2)};
  text-align: center;
  display: grid;
  grid-template:
    'heading'
    '.' ${space(2)}
    'supporting-text'
    '.' ${space(6)}
    'cta';

  ${lock('padding-top', [32, space(7)], [96, space(10)])}
  ${lock('padding-bottom', [32, space(7)], [96, space(10)])}
`

const H1 = styled.h1`
  ${lock('font-size', [32, fontSize(5)], [96, fontSize(7)])}
`

const Button = styled.a`
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary['900']};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  background-color: ${({ theme }) => theme.colors.secondary['400']};
  box-shadow: ${({ theme }) => `${theme.levels[0]}, ${theme.levels[2]}`};
  font-weight: 700;
  transition: box-shadow 200ms ease-out;

  &:hover {
    box-shadow: ${({ theme }) => `${theme.levels[4]}`};
  }
`
const PricingDoc = ({ name, description }) => (
  <div style={{ border: '1px solid' }}>
    <div
      style={{
        width: '21.2rem',
        height: '30rem',
        backgroundColor: '#eee',
        float: 'left',
      }}
    />
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
)

const PricingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "pexels-photo-209251.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Root>
      <HeroWrapper>
        <Img
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            filter: 'opacity(0.2) brightness(1.5) contrast(0.7)',
          }}
          fluid={data.heroImage.childImageSharp.fluid}
        />
        <H1>Cenniki</H1>
        <div style={{ gridArea: 'cta' }}>
          <Button href='tel:+48602338508'>602 338 508</Button>
        </div>
      </HeroWrapper>
      <Wrapper>
        {pricingDocs.map(pricingDoc => (
          <PricingDoc key={pricingDoc.name} {...pricingDoc} />
        ))}
      </Wrapper>
    </Root>
  )
}

export default PricingPage
