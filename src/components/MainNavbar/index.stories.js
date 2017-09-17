import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router';
import MainNavbar from './';

storiesOf('MainNavbar', module).add('default', () => {
  return (
    <MemoryRouter>
      <MainNavbar env="test" />
    </MemoryRouter>
  );
});
