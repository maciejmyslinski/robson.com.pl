import Typography from 'typography';
import { MIN_TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';

export default new Typography({
  title: 'robson',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '500', '700'],
    },
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  headerColor: 'hsla(0, 0%, 15%, 0.87)',
  bodyColor: 'hsla(0, 0%, 15%, 0.87)',
  includeNormalize: true,
  overrideStyles: (verticalRhythm, options, styles) => {
    return {
      'h1,.h1': {
        ...styles.h1,
        lineHeight: '3rem',
      },
      [MIN_TABLET_MEDIA_QUERY]: {
        html: {
          fontSize: `${20 / 16 * 100}%`,
        },
      },
    };
  },
});
