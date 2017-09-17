import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router';
import { storybookDefaults } from '../../hocs/storybook.js';
import MainNavbar from './';

storiesOf('MainNavbar', module).add('default', () => {
  return storybookDefaults(
    <MemoryRouter>
      <MainNavbar env="test" />
    </MemoryRouter>
  );
});
