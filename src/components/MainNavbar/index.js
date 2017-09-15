import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const MainNavbar = props => {
  const { elements = [] } = props;
  return (
    <div>
      {elements.map(element =>
        <a key={uuid()} href={element.path}>
          {element.name}
        </a>
      )}
    </div>
  );
};

MainNavbar.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string
    })
  ).isRequired
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
  ]
};

export default MainNavbar;
