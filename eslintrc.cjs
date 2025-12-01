module.exports = {
  // Las bases para el linter
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
  // Usamos el parser de TypeScript para entender JS moderno
  parser: '@typescript-eslint/parser',
  extends: [
    // Reglas recomendadas de Astro
    'plugin:astro/recommended', 
    // Reglas recomendadas de Prettier (se usa el plugin, no el binario)
    'prettier' 
  ],
  overrides: [
    {
      // Configuración específica para los archivos Astro
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // Ejemplo de regla: no más de un h1 por archivo
        'astro/no-set-html-directive': 'error',
      },
    },
  ],
};