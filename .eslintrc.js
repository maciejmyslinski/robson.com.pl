module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/recommended'],
  settings: {
    'import/core-modules': [
      'react',
      'config',
      'react-router',
      'prop-types',
      'styled-components',
      'react-router-dom'
    ]
  },
  plugins: ['jest'],
  rules: {
    'react/jsx-filename-extension': ['on', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off'
  }
};
