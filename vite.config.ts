import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  run: {
    tasks: {
      dev: {
        command: 'pnpm -r --parallel run dev',
        cache: false,
      },
      build: {
        command: 'pnpm -r run build',
      },
      test: {
        command: 'vp test',
        dependsOn: ['build'],
      },
    },
  },
  fmt: {
    trailingComma: "es5",
    printWidth: 80,
    semi: false,
    tabWidth: 2,
    useTabs: false,
    singleQuote: true,
  },
  lint: {
    plugins: ["import", "vue", "vitest"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
});
