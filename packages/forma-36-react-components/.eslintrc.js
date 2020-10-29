module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  plugins: [
    'react-hooks'
  ],
  parserOptions: {
    ecmaVersion: 7,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/prefer-stateless-function': ['off', { ignorePureComponents: true }],
    'react/jsx-filename-extension': ['off', { extensions: ['.js', '.tsx'] }],
    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/sort-comp': 'off',
    'react/jsx-wrap-multilines': 'off',
    'function-paren-newline': 'off',
    'react/button-has-type': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/no-access-state-in-setstate': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': ['warn', { properties: 'never' }],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
};
