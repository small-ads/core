module.exports = {
  extends: ['eslint-config-small-ads'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist/**/*'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
