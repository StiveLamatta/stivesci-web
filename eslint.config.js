import eslintPluginAstro from 'eslint-plugin-astro';
import tseslintParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslintParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
];
