import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { storybookDefaults } from 'hocs/storybook';
import MainNavbar from './';

storiesOf('MainNavbar').add('default', () => {
  const Component = () => (
    <MemoryRouter>
      <MainNavbar env="test" />
    </MemoryRouter>
  );
  return storybookDefaults(Component);
});
