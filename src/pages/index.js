import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import typography from 'utils/typography';
import media from 'utils/mediaQueries';
import { CHAMBRAY } from 'utils/colors';

const { rhythm, scale } = typography;
const BUTTON_BG_COLOR = CHAMBRAY;

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
  padding: 0 ${rhythm(0.5)};
  max-width: 32rem;

  ${media.greaterThan('medium')`
    margin: 0 0 ${rhythm(2)};
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
    <Container>
      <Header>Sprężyny do Twojej bramy gotowe w ciągu kilku godzin</Header>
      <Description>
        Doradzimy Tobie jak najlepiej dobrać sprężyny do bramy, wykonamy je od
        razu po Twoim zamówieniu i wyślemy do Ciebie jeszcze tego samego dnia.
      </Description>
      <CtaWrapper>
        <CTA to="/sprezyny">Zamów sprężyny</CTA>
        <Incentive>Gwarantowana żywotność</Incentive>
      </CtaWrapper>
    </Container>
  </div>
);

export default IndexPage;
