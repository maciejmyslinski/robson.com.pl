import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import typography from 'utils/typography';
import media from 'utils/mediaQueries';

const { rhythm, scale } = typography;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: ${rhythm(2)} ${rhythm(1)} ${rhythm(3)};

  ${media.greaterThan('medium')`
    margin: ${rhythm(5)} ${rhythm(1)};
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
`;

const CTA = styled(Link)`
  background-color: #355e85;
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
`;

const IndexPage = () => (
  <div>
    <Container>
      <FirstHeader>
        Twój serwis bram, z którego jesteś zawsze zadowolony
      </FirstHeader>
      <Description>Dla firm, administratorów i osób prywatnych</Description>
      <CTA to="/serwis">Umów serwis</CTA>
      <Incentive>Tysiące zadowolonych klientów w całej Wielkopolsce</Incentive>
    </Container>
    <Container>
      <Header>Sprężyny do Twojej bramy gotowe w ciągu kilku godzin</Header>
      <Description>
        Doradzimy Tobie jak najlepiej dobrać sprężyny do bramy, wykonamy je od
        razu po Twoim zamówieniu i wyślemy do Ciebie jeszcze tego samego dnia.
      </Description>
      <CTA to="/sprezyny">Zamów sprężyny</CTA>
      <Incentive>Gwarantowana żywotność</Incentive>
    </Container>
  </div>
);

export default IndexPage;
