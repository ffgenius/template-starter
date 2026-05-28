import { defineConfig } from 'vite-plus'

export default defineConfig({
  fmt: {
    trailingComma: 'es5',
    printWidth: 80,
    semi: false,
    tabWidth: 2,
    useTabs: false,
    singleQuote: true,
    sortImports: {
      groups: [
        'type-import',
        ['value-builtin', 'value-external'],
        'type-internal',
        'value-internal',
        ['type-parent', 'type-sibling', 'type-index'],
        ['value-parent', 'value-sibling', 'value-index'],
        'unknown',
      ],
    },

    sortTailwindcss: {
      functions: ['clsx', 'cn'],
      preserveWhitespace: true,
    },

    sortPackageJson: {
      sortScripts: true,
    },
  },
  lint: {
    plugins: ['import', 'vue', 'vitest'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: 'vite-plus',
        specifier: 'vite-plus/oxlint-plugin',
      },
    ],
    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error',
    },
  },
})
