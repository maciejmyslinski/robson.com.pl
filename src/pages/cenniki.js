import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { space } from 'utils/space'
import { Root } from 'components/root'
import { remToEm } from 'utils/remToEm'
import { fontSize } from 'utils/fontSize'
import { lock } from 'utils/lock'
import SEO from 'components/seo'
import niceGateDoor from 'pdf/cennik-automatyka-do-bram-szlabany-nice.pdf'
import niceGarage from 'pdf/cennik-bram-garazowych-nice.pdf'
import krispolHome from 'pdf/cennik-bram-garazowych-krispol.pdf'
import krispolRollingDoors from 'pdf/cennik-bram-i-krat-rolowanych-krispol.pdf'

const pricingDocs = [
  {
    to: '/cennik-uslug-robson',
    name: 'Cennik usług ROBSON Robert Myśliński',
    description: 'Zapewniamy również miłą obsługę!',
    imageId: 'cennikUslugRobson',
  },
  {
    href: niceGateDoor,
    name: 'Nice GATE & DOOR',
    description:
      'Systemy automatyzacji, sterowania i kontroli bram wjazdowych oraz drzwi garażowych. Szlabany i stystemy parkingowe, systemy kontroli ruchu pieszych, systemy kontroli dostępu, wideodomofony.',
    imageId: 'automatykaNice',
  },
  {
    href: niceGarage,
    name: 'Nice bramy dla domu i przemysłu',
    description:
      'Bramy garażowe i przemysłowe firmy Nice. 33 956 kombinacji dostępnych wymiarów, w tym nawet 88 wymiarów standardowych.',
    imageId: 'bramyNice',
    imageAlt: 'Okładka cennika Nice bramy garażowe',
  },
  {
    href: krispolHome,
    name: 'Krispol bramy dla domu',
    description:
      'Produkty KRISPOL dają całkowitą swobodę wyboru koloru wszystkich elementów stolarki otworowej. Bramy garażowe można dokładnie dopasować do okien, rolet zewnętrznych i drzwi wejściowych.',
    imageId: 'bramyKrispol',
  },
  {
    href: krispolRollingDoors,
    name: 'Krispol bramy i kraty rolowane',
    description:
      'Główną zaletą bram rolowanych jest ich konstrukcja. Pancerz bramy zwijany jest na wał umieszczony nad otworem, dzięki temu przestrzeń pod sufitem hali pozostaje wolna. To ważne, gdy kluczowa jest wysokość pomieszczeń.',
    imageId: 'bramyRolowaneKrispol',
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
  box-shadow: ${({ theme }) => `${theme.levels[0]}`};
  font-weight: 700;
  transition: box-shadow 200ms ease-out;

  &:hover {
    box-shadow: ${({ theme }) => `${theme.levels[4]}`};
  }
`

const PricingDocLink = styled.a`
  color: initial;
  text-decoration: none;
  background: hsla(0, 0%, 0%, 0.02);
  border-radius: 0.2rem;
  box-shadow: ${({ theme }) => theme.levels[0]};
  display: flex;
  flex-flow: row wrap;
`

const PricingDocImage = styled(Img)`
  width: 21.2rem;
  height: 30rem;
  flex: 0 0 auto;
`

const PricingDocContent = styled.div`
  padding: ${space(2)};
  flex: 1 1 ${space(10)};
`

const PricingDoc = ({ name, description, to, href, imageId, images }) => {
  const linkProps = {
    as: to ? Link : null,
    ...(to ? { to } : { href }),
  }

  return (
    <PricingDocLink {...linkProps}>
      <PricingDocImage fixed={images[imageId].childImageSharp.fixed} />
      <PricingDocContent>
        <h2>{name}</h2>
        <p>{description}</p>
      </PricingDocContent>
    </PricingDocLink>
  )
}

const PricingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(
        relativePath: { eq: "hannes-egler-360942-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      cennikUslugRobson: file(relativePath: { eq: "extract-827.png" }) {
        childImageSharp {
          fixed(width: 212, height: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      automatykaNice: file(
        relativePath: { eq: "cennik-automatyka-do-bram-szlabany-nice.jpg" }
      ) {
        childImageSharp {
          fixed(width: 212, height: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      bramyKrispol: file(
        relativePath: { eq: "cennik-bram-garazowych-krispol.jpg" }
      ) {
        childImageSharp {
          fixed(width: 212, height: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      bramyNice: file(relativePath: { eq: "cennik-bram-garazowych-nice.jpg" }) {
        childImageSharp {
          fixed(width: 212, height: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      bramyRolowaneKrispol: file(
        relativePath: { eq: "cennik-bram-i-krat-rolowanych-krispol.jpg" }
      ) {
        childImageSharp {
          fixed(width: 212, height: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Root>
      <SEO title='Ceny bram garażowych' />
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
          <PricingDoc key={pricingDoc.name} {...pricingDoc} images={data} />
        ))}
      </Wrapper>
    </Root>
  )
}

export default PricingPage
