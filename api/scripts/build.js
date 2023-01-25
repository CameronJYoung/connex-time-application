const fs = require("fs");
const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ['./src/main'],
  outfile: './dist/index.js',
  format: "cjs",
  platform: 'node',
  bundle: true
}).catch(console.error);