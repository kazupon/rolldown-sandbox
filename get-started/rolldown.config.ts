import { defineConfig } from 'rolldown'

export default defineConfig([
    {
        input: 'src/main.js',
        output: {
            format: 'esm',
            dir: 'dist'
        }
    },
    {
        input: 'src/worker.js',
        output: {
            format: 'iife',
            dir: 'dist/worker',
        }
    }
])