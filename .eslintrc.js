module.exports = {
  root: true,
  extends: ['last', 'prettier/react', 'plugin:react/recommended'],
  settings: {
    'import/core-modules': [
      'react',
      'config',
      'react-router',
      'prop-types',
      'styled-components',
      'react-router-dom',
      'react-helmet',
    ],
  },
  plugins: ['jest'],
  // rules: {
  //   'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
  //   'import/prefer-default-export': 'off',
  // },
  env: {
    'jest/globals': true,
  },
  globals: {
    shallow: true,
    render: true,
    mount: true,
  },
};
