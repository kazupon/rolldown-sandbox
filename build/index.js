import { ref } from "vue";

// src/calc.js
function add(a, b) {
	return a + b;
}
function sub(a, b) {
	return a - b;
}

// src/modules/say.js
function say(msg) {
	console.log(msg);
}

// src/index.js
console.log(add(1, 2));
console.log(sub(1, 2));
const version = __VERSION__;
say('hello world!');
const count = ref(0);
console.log(count.value);
