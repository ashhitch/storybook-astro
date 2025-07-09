import { defineConfig } from 'tsup';
import pkg from './package.json' assert { type: 'json' };

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  'astro:scripts/page.js',
  'virtual:storybook-renderer-fallback',
  'lightningcss'
];

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  external: externals,
});
