import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { Link as SimpleLink } from 'react-router-dom';
import typography from '../../utils/typography';

const { rhythm } = typography;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: #424242;
  height: ${rhythm(2)};
  justify-content: space-around;
  overflow: hidden;
`;

const MainNavbar = props => {
  const { elements, env } = props;
  const LinkElement = env === 'gatsby' ? Link : SimpleLink;
  const Element = styled(LinkElement) `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: transparent;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.15s ease-in-out, background 0.15s ease-in-out;

    &:hover, &:focus, &:active {
      color: #FBB451;
    }
  `;
  return (
    <Wrapper>
      {elements.map(element =>
        <Element key={uuid()} to={element.path}>
          {element.name}
        </Element>,
      )}
    </Wrapper>
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
      path: '/sprezyny',
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
