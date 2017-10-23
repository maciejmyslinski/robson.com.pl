import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { storybookDefaults } from 'hocs/storybook';
import MainNavbar from './';
import logo from 'images/logo.png';

storiesOf('MainNavbar', module).add('default', () => {
  const logoData = {
    resolutions: {
      srcSet: `${logo} 1x`,
      src: logo,
      width: 198,
    },
  };
  const Component = () => (
    <MemoryRouter>
      <MainNavbar env="test" logo={logoData} />
    </MemoryRouter>
  );
  return storybookDefaults(Component);
});
