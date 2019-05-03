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
  box-shadow: ${({ theme }) => `${theme.levels[0]}`};
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

const ServicePage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "carl-nenzen-loven-43549.jpg" }) {
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
        <H1>Serwis bram, z którego jesteś zawsze zadowolony</H1>
        <div style={{ gridArea: 'cta' }}>
          <Button href='tel:+48602338508'>602 338 508</Button>
        </div>
      </HeroWrapper>
      <ContentWrapper>
        <h2>Profesjonalizm</h2>
        <p>
          W serwisie bram garażowych i przemysłowych, automatyki do bram i
          szlabanów parkingowych specjalizujemy się od początku istnienia firmy,
          to znaczy od 1996r. Zdobyte przez te lata ogromne doświadczenie oraz
          szeroka gama posiadanych przez nas części zamiennych, przyczynia się
          do bardzo szybkich napraw zarówno przemysłowych bram segmentowych i
          ogrodzeniowych, jak i bram garażowych do domowego użytku.
        </p>
        <p>
          Gdy podpisujemy z klientami <b>umowy serwisowe</b>, możemy zobowiązać
          się do utrzymania ciągłości pracy bram i błyskawicznej dostępności
          zużywających się części zamiennych, takich jak: rolki, liny, sprężyny,
          panele do bram, itp. Dzięki temu nasz serwis będzie jeszcze szybszy, a
          Twoja brama zawsze sprawna.
        </p>
        <p>
          Potrafimy naprawić usterki mechaniczne i elektroniczne. Posiadamy
          wyspecjalizowany dział serwisu w naprawie elektroniki bramowej.
          Naprawiamy zarówno te drobne rzeczy, takie jak piloty do bram,
          fotokomórki, lampy sygnalizacyjne, jak i bardzo skomplikowane centrale
          bram przemysłowych. Serwisujemy bramy ręczne i automatyczne.
        </p>
        <p>
          Posiadamy części do bram Hormann, Krispol, Wiśniowski, Nice, Novoferm,
          Normstahl, Crawford i wielu innych.
        </p>
        <p>
          Chociaż główna siedziba naszej firmy mieści się w Poznaniu, usługi
          naprawy bram wykonujemy w całej wielkopolsce, a nawet jeszcze dalej.
        </p>
        <div style={{ textAlign: 'center', margin: '7rem 0 3rem' }}>
          <Button href='tel:+48602338508'>602 338 508</Button>
        </div>
        <h2>Dobre ceny</h2>
        <p>
          Z ROBSON-em zawsze wyjdziesz najkorzystniej. Co ciekawe, wcale nie
          dlatego, że mamy najniższe stawki. Powodów jest kilka:
        </p>
        <ul>
          <li>
            Mamy ogromne doświadczenie w serwisowaniu bram i automatyki. Nasi
            fachowcy potrafią <b>usunąć usterkę w bardzo krótkim czasie</b>.
            Rezultat - niższa cena.
          </li>
          <li>
            Ponieważ nasi serwisanci dużo części mają przy sobie,{' '}
            <b>do większości napraw dojeżdżamy tylko raz</b>.
          </li>
          <li>
            Korzystaj z naszych przeglądów, a Twoja brama będzie mniej narażona
            na usterkę - stanie się jeszcze bardziej bezawaryjna!
          </li>
        </ul>
        <h2>Siłowniki zastępcze</h2>
        <p>
          Gdyby Twój siłownik wymagał demontażu, na czas naprawy jest{' '}
          <b>możliwość zamontowania siłownika zastępczego</b>. Dotyczy to
          siłowników firmy Nice i niektórych siłowników przemysłowych. O
          szczegóły pytaj w siedzibie firmy.
        </p>
        <h2>Miła obsługa</h2>
        <p>
          Skontaktuj się z nami, a przekonasz się, że zostaniesz miło obsłużony.
        </p>
        <div style={{ textAlign: 'center', margin: '7rem 0 3rem' }}>
          <Button href='tel:+48602338508'>602 338 508</Button>
        </div>
        <h2>Zadowolenie</h2>
        <p>Nasze motto: zadowolony klient.</p>
      </ContentWrapper>
    </Root>
  )
}
export default ServicePage
