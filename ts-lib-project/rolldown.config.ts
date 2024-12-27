import { defineConfig } from 'rolldown'
import UnpluginIsolatedDecl from 'unplugin-isolated-decl/rolldown'
import { minify } from 'rollup-plugin-esbuild'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    banner: '/* This is ts lib project */',
    intro: '/** @license MIT */',
    footer: 'console.log("this is footer")',
    outro: 'console.log("this is outro")',
    dir: 'dist',
    format: 'esm',
  },
  define: {
    __DEV__: process.env.NODE_ENV === 'production' ? 'false' : 'true',
  },
  plugins: [
    {
      name: 'rolldown-plugin-sandbox',
      buildStart() {
        console.log('this is build start')
      },
      buildEnd() {
        console.log('this is build end')
      },
    },
    UnpluginIsolatedDecl(),
    ...(process.env.NODE_ENV === 'production' ? [minify()] : []),
  ],
})