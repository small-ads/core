module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "airbnb-typescript",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react-hooks", "@typescript-eslint/eslint-plugin"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
}
