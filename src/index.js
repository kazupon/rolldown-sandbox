import { add, sub } from './calc'
import { say } from 'modules/say'
import { ref } from 'vue'

console.log(add(1, 2)) // 3
console.log(sub(1, 2)) // -1

const version = __VERSION__

say('hello world!')

const count = ref(0)
console.log(count.value) // 0
