import React from 'react';
import { TypographyStyle } from 'react-typography';
import typography from '../utils/typography';

export const storybookDefaults = Component =>
  <div>
    <TypographyStyle typography={typography} />
    <Component />
  </div>;
