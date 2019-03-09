import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Root } from 'components/root'
import chevronRight from 'images/chevron-right.svg'

const HeroWrapper = styled.div`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing[7]} ${theme.spacing[2]}`};
  text-align: center;
`

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[5]};
`

const Thumbnails = styled.section`
  margin: ${({ theme }) => `${theme.spacing[7]} ${theme.spacing[2]}`};
`

const ThumbnailWrapper = styled.div`
  max-width: 30rem;
  margin: ${({ theme }) => `${theme.spacing[3]} 0`};
`

const Thumbnail = ({ img, children }) => (
  <ThumbnailWrapper>
    <Img
      fixed={img}
      style={{
        height: '19.2rem',
      }}
    />
    <p>{children}</p>
  </ThumbnailWrapper>
)

const Button = styled(Link)`
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutrals['900']};
  padding: ${({ theme }) =>
    `${theme.spacing[2]} 6rem ${theme.spacing[2]} ${theme.spacing[2]}`};
  background-color: ${({ theme }) => theme.colors.secondary['400']};

  &::after {
    content: '';
    width: 4.6rem;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: center no-repeat url(${chevronRight}), #de911d;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "pexels-photo-209251.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      homeImage: file(relativePath: { eq: "pexels-photo-106399.jpeg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      industrialImage: file(relativePath: { eq: "extract-2.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      serviceImage: file(relativePath: { eq: "extract-35.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
        <H1>Wszystko, czego potrzebuje Twoja brama</H1>
        <p>nasze motto: zadowolony klient</p>
        <Button to='/serwis'>wezwij serwis</Button>
      </HeroWrapper>
      <Thumbnails>
        <Thumbnail img={data.homeImage.childImageSharp.fixed}>
          Odkryj najlepsze produkty dla Twojego domu. Znajdź solidną bramę
          garażową i dobierz nowoczesną automatykę wraz z akcesoriami. A może
          szukasz okien lub rolet? To tutaj!
        </Thumbnail>
        <Thumbnail img={data.industrialImage.childImageSharp.fixed}>
          Rozwiązania dla przemysłu godne największych. Znajdziesz tu bramy i
          kraty do hal, ogrodzenia, bramy wjazdowe, automatykę, a nawet
          zaawansowane systemy parkingowe.
        </Thumbnail>
        <Thumbnail img={data.serviceImage.childImageSharp.fixed}>
          Szukasz szybkiego i rzetelnego serwisu swojej bramy? A może kogoś, kto
          zaopiekuje się Twoimi bramami i zadba, by zawsze były sprawne?
          Czujemy, że Twoje poszukiwania są bliskie końca!
        </Thumbnail>
      </Thumbnails>
      <div style={{ margin: '9.6rem 1.2rem' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '1.8rem',
            fontFamily: `'Open Sans', -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif`,
            marginBottom: '2.4rem',
          }}>
          Twój sukces to nasz sukces
        </h2>
        <p style={{ maxWidth: '34em', margin: '0 auto', lineHeight: '1.8' }}>
          Nasz wizerunek budujemy na jakości oferowanych rozwiązań. Dbamy o nią
          na każdym poziomie - doboru produktów, sposobu wykonania oraz obsługi
          klienta. Setki profesjonalnych montaży, tysiące błyskawicznych
          serwisów oraz fachowe doradztwo i miła obsługa na co dzień owocują
          zadowolonymi i chętnie nas polecającymi klientami.
        </p>
      </div>
      <Button to='/serwis'>wezwij serwis</Button>
    </Root>
  )
}
export default IndexPage
