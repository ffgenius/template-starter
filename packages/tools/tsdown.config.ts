import { defineConfig } from 'vite-plus/pack'

const config = defineConfig({
  entry: './src/index.ts',
  clean: true,
  dts: true,
  platform: 'neutral',
  format: 'esm',
  exports: {
    inlinedDependencies: true,
  },
})

export default config
