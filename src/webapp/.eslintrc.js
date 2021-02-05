module.exports = {
  extends: ['eslint-config-small-ads'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
  },
};
