/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/main'],
  outfile: './dist/index.js',
  format: 'cjs',
  platform: 'node',
  bundle: true,
  minify: true
}).catch(console.error);