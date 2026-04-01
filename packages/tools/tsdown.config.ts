import type { UserConfig } from 'tsdown'

import { defineConfig } from 'tsdown'

const config: UserConfig = defineConfig({
  entry: './src/index.ts',
  clean: true,
  dts: true,
  platform: 'neutral',
  format: 'esm',
})

export default config
