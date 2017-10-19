import { generateMedia, pxToRem } from 'styled-media-query';

export default generateMedia(
  pxToRem({
    small: '450px',
    medium: '768px',
    large: '1170px',
    huge: '1440px',
  }),
);
