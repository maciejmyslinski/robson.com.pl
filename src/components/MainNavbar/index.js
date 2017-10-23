import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { Link as SimpleLink } from 'react-router-dom';
import { position } from 'polished';
import typography from 'utils/typography';
import logo from 'images/logo.png';
import logo2x from 'images/logo@2x.png';
import logo3x from 'images/logo@3x.png';
import { TUNDORA, CASABLANCA } from 'utils/colors';
import media from 'utils/mediaQueries';
import { MAX_WIDTH, BOTTOM_NAV_HEIGHT } from 'utils/layout';

const { rhythm, scale } = typography;
const BACKGROUND_COLOR = TUNDORA;
const ACTIVE_COLOR = CASABLANCA;

const MenuElements = styled.div`
  ${position('fixed', undefined, '0px', '0px', '0px')};
  display: flex;
  flex-flow: row nowrap;
  background-color: ${BACKGROUND_COLOR};
  height: ${BOTTOM_NAV_HEIGHT};
  justify-content: space-around;
  overflow: hidden;
  ${scale(0)};
  z-index: 100;

  ${media.greaterThan('medium')`
    height: ${rhythm(3)};
    position: static;
    justify-content: flex-end;
  `};

  @media (min-width: 769px) {
    height: ${rhythm(3)};
    position: static;
    justify-content: flex-end;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: ${rhythm(3)};
  background-color: ${BACKGROUND_COLOR};
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100vw;
  max-width: ${MAX_WIDTH};
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.greaterThan('medium')`
    justify-content: space-between;
  `};
`;

const Logo = styled.img`
  margin: 0;
  display: block;
  height: ${rhythm(2.2)};
`;

const MainNavbar = props => {
  const { elements, env } = props;
  const LinkElement = env === 'gatsby' ? Link : SimpleLink;
  const Element = styled(LinkElement).attrs({
    activeClassName: 'active',
  })`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: transparent;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.15s ease-in-out, background 0.15s ease-in-out;

    &:hover,
    &:focus,
    &:active,
    &.active {
      color: ${ACTIVE_COLOR};
    }

    ${media.greaterThan('medium')`
      flex: 0 0;
      padding: 0 ${rhythm(0.5)};
    `};
  `;
  return (
    <TopBar>
      <Wrapper>
        <LinkElement to="/">
          <Logo
            src={logo3x}
            srcSet={`
            ${logo},
            ${logo2x} 2x,
            ${logo3x} 3x
          `}
          />
        </LinkElement>
        <MenuElements>
          {elements.map(element => (
            <Element key={uuid()} to={element.path}>
              {element.name}
            </Element>
          ))}
        </MenuElements>
      </Wrapper>
    </TopBar>
  );
};

MainNavbar.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  env: PropTypes.oneOf(['gatsby', 'test']),
};

MainNavbar.defaultProps = {
  elements: [
    {
      name: 'Serwis',
      path: '/serwis',
    },
    {
      name: 'Sprężyny',
      path: '/sprezyny-do-bram',
    },
    {
      name: 'Cenniki',
      path: '/cenniki',
    },
    {
      name: 'Kontakt',
      path: '/kontakt',
    },
  ],
  env: 'gatsby',
};

export default MainNavbar;
