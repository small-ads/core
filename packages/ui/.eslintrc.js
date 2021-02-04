module.exports = {
  extends: ["eslint-config-small-ads"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
  }
};
