import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Root } from 'components/root'

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
      <Img fluid={data.heroImage.childImageSharp.fluid} />
      <h1>Wszystko, czego potrzebuje Twoja brama</h1>
      <p>nasze motto: zadowolony klient</p>
      <Link to='/serwis'>wezwij serwis</Link>
      <Img fixed={data.homeImage.childImageSharp.fixed} />
      <p>
        Odkryj najlepsze produkty dla Twojego domu. Znajdź solidną bramę
        garażową i dobierz nowoczesną automatykę wraz z akcesoriami. A może
        szukasz okien lub rolet? To tutaj!
      </p>
      <Img fixed={data.industrialImage.childImageSharp.fixed} />
      <p>
        Rozwiązania dla przemysłu godne największych. Znajdziesz tu bramy i
        kraty do hal, ogrodzenia, bramy wjazdowe, automatykę, a nawet
        zaawansowane systemy parkingowe.
      </p>
      <Img fixed={data.serviceImage.childImageSharp.fixed} />
      <p>
        Szukasz szybkiego i rzetelnego serwisu swojej bramy? A może kogoś, kto
        zaopiekuje się Twoimi bramami i zadba, by zawsze były sprawne? Czujemy,
        że Twoje poszukiwania są bliskie końca!
      </p>
      <h2>Twój sukces to nasz sukces</h2>
      <p>
        Nasz wizerunek budujemy na jakości oferowanych rozwiązań. Dbamy o nią na
        każdym poziomie - doboru produktów, sposobu wykonania oraz obsługi
        klienta. Setki profesjonalnych montaży, tysiące błyskawicznych serwisów
        oraz fachowe doradztwo i miła obsługa na co dzień owocują zadowolonymi i
        chętnie nas polecającymi klientami.
      </p>
      <Link to='/serwis'>wezwij serwis</Link>
    </Root>
  )
}
export default IndexPage
