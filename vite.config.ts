import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import banner from 'vite-plugin-banner';
import dts from 'vite-plugin-dts';

import PACKAGE from './package.json';

if (PACKAGE.name == null) {
  throw new Error("'name' property missing from package.json");
}

const pkgName = PACKAGE.name;
const pkgNameCamel = pkgName.replace(/(?<=-)./g, char => char.toUpperCase());

const fileNames = {
  es: `${pkgName}.mjs`,
  cjs: `${pkgName}.cjs`,
  iife: `${pkgName}.iife.js`,
} as const;
const formats = Object.keys(fileNames) as Array<keyof typeof fileNames>;

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: (format) => fileNames[format],
      formats,
      name: pkgNameCamel,
    },
    sourcemap: true,
    
  },
  plugins: [
    dts(),
    banner({
      content: fs.readFileSync(path.resolve(__dirname, 'NOTICE'), 'utf-8')
    })
  ],
});