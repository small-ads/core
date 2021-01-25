module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [ 
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "airbnb-typescript"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ["react-hooks", "@typescript-eslint/eslint-plugin"],
  rules: {
    'import/prefer-default-export': 'off',
    "import/no-extraneous-dependencies": "off",
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parserOptions": {
        "project": ["tsconfig.json"]
      }
    }
  ]
};
