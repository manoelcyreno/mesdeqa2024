module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'cypress/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['cypress'],
  rules: {
    semi: 0,
    quotes: ['error', 'single'],
    'prettier/prettier': 'error',
  },
}
