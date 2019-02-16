module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['standard', 'standard-react'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', 'never'],
  },
}
