import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Root } from 'components/root'
import { space } from 'utils/space'
import { fontSize } from 'utils/fontSize'
import { lock } from 'utils/lock'

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

const ContentWrapper = styled.div`
  max-width: ${space(14)};
  margin: ${space(7)} auto;
  padding: 0 ${space(2)};
  line-height: 2;
  display: flex;
  flex-direction: column;

  & > h2 {
    margin: ${space(6)} 0 ${space(2)};
  }

  & > p + p {
    margin-top: ${space(3)};
  }

  & > ul {
    list-style: disc;
    margin: ${space(3)} 0 0 ${space(4)};
  }
`

const SpringsPage = () => {
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
        <H1>Sprężyny do bram</H1>
        <div style={{ gridArea: 'cta' }}>
          <Button href='tel:+48604461202'>604 461 202</Button>
        </div>
      </HeroWrapper>
      <ContentWrapper>
        <h2>Jakość</h2>
        <p>
          Sprężyny, które dostarczamy są poddane obróbce kulowania. Dzięki temu
          są one znacznie bardziej wytrzymałe.
        </p>
        <p>
          <b>Czym jest kulowanie?</b>
          Najprościej mówiąc, kulowanie polega na bombardowaniu materiału
          tysiącami maleńkich drobinek. Powierzchnia tak obrobionego kawałeka
          metalu zmienia swoją strukturę i geometrię. Powstaje w niej cała
          siatka tak zwanych naprężeń ściskających.{' '}
          <b>Trwałość sprężyny skrętnej wzrasta o 100%!</b> Ponadto sprężyna
          wykonana z takiego drutu jest znacznie bardziej{' '}
          <b>odporna na korozję oraz powstawanie mikropęknięć.</b>
        </p>
        <p>
          Technologię kulowania wykorzystuje się między innymi do kształtowania
          aerodynamicznych krzywizn metalowych powierzchni skrzydeł w przemyśle
          lotniczym. Teraz technologia wysokich lotów również w twoim garażu!
        </p>
        <div style={{ textAlign: 'center', margin: '7rem 0 3rem' }}>
          <Button href='tel:+48604461202'>604 461 202</Button>
        </div>
        <h2>Szybkość</h2>
        <p>
          Pęknięta sprężyna często nie pozwala na otwarcie bramy. Rozumiemy jak
          kłopotliwe może się to okazać, dlatego wychodzimy naprzeciw potrzebom
          naszych klientów i dostarczamy sprężyny do bram tak szybko, jak to
          tylko możliwe.
        </p>
        <p>
          Dział naszej firmy specjalizujący się w sprężynach do bram garażowych
          oraz przemysłowych jest gotowy na przygotowanie sprężyny tuż po tym,
          jak złożysz zamówienie. Sprężynę otrzymasz w ciągu jednego dnia
          roboczego.
        </p>
        <p>
          <b>
            W obrębie Poznania jest możliwość wymiany sprężyn również w weekend.
          </b>
          Nie zwlekaj!
        </p>
        <h2>Przystępne ceny</h2>
        <p>
          Dysponujemy sprężynami oryginalnymi jak i zamiennikami. Dzięki temu
          możesz zdecydować się na sprężynę w różnym przedziale cenowym.
        </p>
        <h2>Miła obsługa</h2>
        <p>Zapewniamy również miłą obsługę!</p>
        <div style={{ textAlign: 'center', margin: '7rem 0 3rem' }}>
          <Button href='tel:+48604461202'>604 461 202</Button>
        </div>
        <h2>Zadowolenie</h2>
        <p>Nasze motto: zadowolony klient.</p>
      </ContentWrapper>
    </Root>
  )
}
export default SpringsPage
