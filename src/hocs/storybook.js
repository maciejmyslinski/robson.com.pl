import React from 'react';
import { injectGlobal } from 'styled-components';
import typography from '../utils/typography';

export const storybookDefaults = Component => {
  injectGlobal(typography.toString());
  return Component;
};
