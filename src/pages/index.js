import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import typography from 'utils/typography';
import media from 'utils/mediaQueries';
import { CHAMBRAY } from 'utils/colors';
import { MAX_WIDTH } from 'utils/layout';

const { rhythm, scale } = typography;
const BUTTON_BG_COLOR = CHAMBRAY;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: ${rhythm(1)} auto ${rhythm(3)};
  padding: 0 ${rhythm(1)};
  max-width: ${MAX_WIDTH};

  ${media.greaterThan('medium')`
    margin: ${rhythm(5)} auto;
  `};
`;

const FirstHeader = styled.h1`
  text-align: center;
`;

const Header = styled.h2.attrs({
  className: 'h1',
})`
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
  padding: 0 ${rhythm(0.5)};
  max-width: 32rem;

  ${media.greaterThan('medium')`
    margin: 0 0 ${rhythm(1.8)};
  `};
`;

const CtaWrapper = styled.div`
  display: table;
`;

const CTA = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${BUTTON_BG_COLOR};
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  margin: 0 0 0.75rem;
  padding: 1.125rem 2rem;
  border-radius: 100px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 20px 0 rgba(0, 0, 0, 0.12);
  text-transform: uppercase;
`;

const Incentive = styled.p`
  text-align: center;
  ${scale(-0.2999)};
  display: table-caption;
  caption-side: bottom;
`;

const Images = styled.div`
  margin: 0 auto;
  max-width: ${MAX_WIDTH};
  display: flex;
`;

const ImageWrapper = styled.div`
  flex: 1 1 auto;

  & + & {
    display: none;
  }

  ${media.greaterThan('medium')`
    & + & {
      display: block;
    }
  `};
`;

const Image = styled.img`
  display: block;
  margin: 0;
  width: 100%;
  height: auto;
`;

const BenefitTitle = styled.h3`
  margin-top: ${rhythm(2.3)};
  margin-bottom: ${rhythm(0.7)};
  text-align: center;
  line-height: ${rhythm(1)};
`;

const BenefitContent = styled.p`
  text-align: center;
  max-width: 32rem;
`;

const TrustIndicator = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 100%;

  ${media.greaterThan('small')`
    flex-flow: row nowrap;
    align-items: flex-start;
  `};
`;
const NiceBadge = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1;
`;
const ClientsList = styled.div`
  text-align: center;
  margin-top: ${rhythm(2)};
  flex: 1 1;

  & > ul {
    list-style-type: none;
    margin-left: 0;
  }

  ${media.greaterThan('small')`
    margin-top: 0;
    text-align: left;
    margin-left: ${rhythm(1)};
    
  `};
`;
const NiceBadgeImage = styled.img`
  display: block;
`;

const Footer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: ${rhythm(3)} ${rhythm(1)};
  background: #5c5c5c;
  color: #fff;

  ${media.greaterThan('medium')`
    flex-flow: row nowrap;

    & > * {
      flex: 1 1;
    }

    & > *:not(:last-child) {
      padding-right: ${rhythm(1)};
    }
  `};
`;

const IndexPage = () => (
  <div>
    <Container>
      <FirstHeader>
        Twój serwis bram, z którego jesteś zawsze zadowolony
      </FirstHeader>
      <Description>Dla firm, administratorów i osób prywatnych</Description>
      <CtaWrapper>
        <CTA to="/serwis">Umów serwis</CTA>
        <Incentive>
          Tysiące zadowolonych klientów w całej Wielkopolsce
        </Incentive>
      </CtaWrapper>
    </Container>
    <Images>
      <ImageWrapper>
        <Image src="https://dummyimage.com/767x512/ccc/fff" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="https://dummyimage.com/767x512/bbb/fff" />
      </ImageWrapper>
    </Images>
    <Container>
      <Header>Sprężyny do Twojej bramy gotowe w ciągu kilku godzin</Header>
      <Description>
        Doradzimy Tobie jak najlepiej dobrać sprężyny do bramy, wykonamy je od
        razu po Twoim zamówieniu i wyślemy do Ciebie jeszcze tego samego dnia.
      </Description>
      <CtaWrapper>
        <CTA to="sprezyny-do-bram">Zamów sprężyny</CTA>
        <Incentive>Gwarantowana żywotność</Incentive>
      </CtaWrapper>
    </Container>
    <Images>
      <ImageWrapper>
        <Image src="https://dummyimage.com/767x512/ccc/fff" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="https://dummyimage.com/767x512/bbb/fff" />
      </ImageWrapper>
    </Images>
    <Container>
      <Header>Jak wybrać firmę serwisującą?</Header>
      <Description>
        Z naszego poradnika dowiesz się na co zwracać uwagę, o co pytać i czego
        oczekiwać od firmy serwisującej.
      </Description>
      <CtaWrapper>
        <CTA to="sprezyny-do-bram">Pobierz poradnik</CTA>
      </CtaWrapper>
    </Container>
    <Images>
      <ImageWrapper>
        <Image src="https://dummyimage.com/767x512/ccc/fff" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="https://dummyimage.com/767x512/bbb/fff" />
      </ImageWrapper>
    </Images>
    <Container>
      <Header>Co współpraca z nami będzie oznaczała dla Ciebie</Header>
      <BenefitTitle>Poczujesz prawdziwą satysfakcję</BenefitTitle>
      <BenefitContent>
        Dla nas Twoje zadowolenie to nie tylko slogan - to najwyższy priorytet.
        Ze współpracy z nami możesz oczekiwać maksymalnej satysfakcji.
      </BenefitContent>
      <BenefitTitle>Oszczędzisz pieniądze</BenefitTitle>
      <BenefitContent>
        Nasi fachowcy pracują efektywnie i większość prac wykonują na miejscu.
        Dla Ciebie oznacza to, że szybciej będziesz cieszył się sprawną bramą i
        zapłacisz mniej.
      </BenefitContent>
      <BenefitTitle>Załatwisz wszystko za jednym razem</BenefitTitle>
      <BenefitContent>
        Z bramami potrafimy zrobić wszystko - od przeglądu po generalny remont.
        Jako jedni z nielicznych samodzielnie wyprodukujemy sprężyny do Twojej
        bramy.
      </BenefitContent>
    </Container>
    <Images>
      <ImageWrapper>
        <Image src="https://dummyimage.com/767x512/ccc/fff" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="https://dummyimage.com/767x512/bbb/fff" />
      </ImageWrapper>
    </Images>
    <Container>
      <Header>Dlaczego możesz nam zufać?</Header>
      <BenefitTitle>Ponad 20 lat doświadczenia</BenefitTitle>
      <BenefitContent>
        Bramy to nasza specjalność od 1996 roku. Dziesiątki lat doświadczenia
        sprawiają, że jesteśmy dla Ciebie wyjątkowo bezpiecznym wyborem.
      </BenefitContent>
      <BenefitTitle>Licencjonowany partner Nice</BenefitTitle>
      <BenefitContent>
        Stoimy na barkach gigantów. Nice to jeden z największych producentów
        automatyki i bram w całej Europie. Firma Nice udzieliła naszym
        serwisantom imiennych licencji instalatorów. Oznacza to, że należą do
        elitarnego grona ekspertów rekomendowanych przez Nice.
      </BenefitContent>
    </Container>
    <Images>
      <ImageWrapper>
        <Image src="https://dummyimage.com/767x512/ccc/fff" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="https://dummyimage.com/767x512/bbb/fff" />
      </ImageWrapper>
    </Images>
    <Container>
      <Header>
        Wszysko, co powinieneś wiedzieć zanim kupisz sprężyny do bramy
      </Header>
      <Description>
        Sprężyny do bramy to zakup na całe lata. Z tego poradnika dowiesz się na
        co zwrócić uwagę, żebyś podjął najlepszą decyzję przy ich zakupie.
      </Description>
      <CtaWrapper>
        <CTA to="sprezyny-do-bram">Pobierz poradnik</CTA>
      </CtaWrapper>
    </Container>
    <Images>
      <ImageWrapper>
        <Image src="https://dummyimage.com/767x512/ccc/fff" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="https://dummyimage.com/767x512/bbb/fff" />
      </ImageWrapper>
    </Images>
    <Container>
      <Header>Prosty cennik</Header>
      <Description>
        Wszysko, co jest wysokiej jakości, kosztuje. Przygotowaliśmy dla Ciebie
        złoty środek - idealny stosunek jakości do ceny.
      </Description>
      <CtaWrapper>
        <CTA to="sprezyny-do-bram">Sprawdź ceny</CTA>
      </CtaWrapper>
    </Container>
    <Container>
      <TrustIndicator>
        <NiceBadge>
          <NiceBadgeImage src="https://dummyimage.com/200x200/bbb/fff" />
        </NiceBadge>
        <ClientsList>
          <h3>Zaufali nam:</h3>
          <ul>
            <li>Politechnika Poznańska</li>
            <li>Pol Strautmann Sp. z o.o.</li>
            <li>Impel</li>
            <li>BMW Olszowiec</li>
          </ul>
        </ClientsList>
      </TrustIndicator>
    </Container>
    <Footer>
      <p>
        Ta strona używa plików cookies.<br />
        Korzystając ze strony akceptujesz regulamin strony.<br />
        Copyright © 2017 ROBSON Robert Myśliński
      </p>
      <p>
        ROBSON Robert Myśliński<br />
        ul. Ostrówek 10/11<br />
        61-122 Poznań<br />
        618 657 835<br />
        biuro@robson.com.pl
      </p>
    </Footer>
  </div>
);

export default IndexPage;
