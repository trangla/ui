import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import stylisticJs from '@stylistic/eslint-plugin-js';
import airbnb from 'eslint-config-airbnb-base';
import airbnbTs from 'eslint-config-airbnb-typescript';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier,
      airbnb: airbnb,
      airbnbTs: airbnbTs,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      curly: ['warn', 'all'],
      'import/prefer-default-export': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-bind': 'off',
      camelcase: 'error',
      'spaced-comment': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-duplicate-imports': 'error',
      '@typescript-eslint/no-var-requires': 0,
      'jest/valid-title': 0,
      '@stylistic/js/lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
    },
  }
);
