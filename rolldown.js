
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as rolldown from '@rolldown/node'
import replace from '@rollup/plugin-replace'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function main() {
  const build = await rolldown.rolldown({
    input: path.resolve(__dirname, 'src/index.js'),
    external: ['vue'],
    plugins: [{
      name: 'test-plugin',
      buildStart() {
        console.log('buildStart -----------------')
      },
      buildEnd() {
        console.log('buildEnd -----------------')
      },
      resolveId(source) {
        console.log('resolveId ---------', source)
      },
      transform(code, id) {
        console.log('transform -----', code, '-', id)
        return code
      }
    },
    /*
    replace({
      __VERSION__: '1.0.0'
    })
    */
    ],
    resolve: {
      conditionNames: ['node', 'import'],
      alias: {
        modules: path.resolve(__dirname, 'src/modules'),
      }
    }
  })
  
  const result = await build.generate({
    dir: 'build',
    sourcemap: true,
  })
  // const result = await build.write({
  //   format: 'esm',
  //   file: path.join(__dirname, 'dist/build.js')
  // })
  console.log('result', result)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})

