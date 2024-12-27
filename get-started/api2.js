import { build } from 'rolldown'

// build writes to disk by default
await build({
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
  },
})