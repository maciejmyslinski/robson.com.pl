import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { Link as SimpleLink } from 'react-router-dom';

const Wrapper = styled.div`background-color: #424242;`;

const MainNavbar = props => {
  const { elements, env } = props;
  let LinkElement = env === 'gatsby' ? Link : SimpleLink;
  const Element = styled(LinkElement)`
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 8px;
  `;
  return (
    <Wrapper>
      {elements.map(element =>
        <Element key={uuid()} to={element.path}>
          {element.name}
        </Element>
      )}
    </Wrapper>
  );
};

MainNavbar.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string
    })
  ).isRequired,
  env: PropTypes.oneOf(['gatsby', 'test'])
};

MainNavbar.defaultProps = {
  elements: [
    {
      name: 'Serwis',
      path: '/serwis'
    },
    {
      name: 'Sprężyny',
      path: '/sprezyny'
    },
    {
      name: 'Cenniki',
      path: '/cenniki'
    },
    {
      name: 'Kontakt',
      path: '/kontakt'
    }
  ],
  env: 'gatsby'
};

export default MainNavbar;
