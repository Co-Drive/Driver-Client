module.exports = [
  {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended',
      'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          'react/jsx-props-no-spreading': 'off',
          'eol-last': ['error', 'always'],
          'react/react-in-jsx-scope': 'off',
          'no-multi-spaces': 'error',
          'simple-import-sort/imports': 'error',
          allowConstantExport: true,
        },
      ],
    },
  },
];
