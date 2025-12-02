/** @type {import("prettier").Config} */
export default {
    // 👇 AQUÍ ESTÁ LO QUE PIDES
    tabWidth: 4, // Usa 4 espacios de indentación
    useTabs: false, // Usa espacios en lugar de tabuladores (recomendado)

    // Otras reglas estándar profesionales
    semi: true, // Pone punto y coma al final (standard en JS)
    singleQuote: true, // Usa comillas simples '' en lugar de dobles ""
    trailingComma: 'es5',
    printWidth: 1000, // Corta la línea si es muy larga

    // Configuración para que entienda Astro
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
