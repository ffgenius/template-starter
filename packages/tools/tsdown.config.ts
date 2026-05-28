import type { UserConfig } from 'vite-plus/pack'

import { defineConfig } from 'vite-plus/pack'

const config: UserConfig = defineConfig({
  entry: './src/index.ts',
  clean: true,
  dts: true,
  platform: 'neutral',
  format: 'esm',
})

export default config
