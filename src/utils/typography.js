import Typography from 'typography';

export default new Typography({
  title: 'robson',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Roboto',
      styles: '500'
    }
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  headerColor: 'hsla(0, 0%, 15%, 0.87)',
  bodyColor: 'hsla(0, 0%, 15%, 0.87)',
  includeNormalize: true
});
