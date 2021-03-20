// ---CommonJS---
// var mod = require("./lib");
// ---ES6 模块---
import * as mod from "./lib.mjs";

// ---CommonJS---
// console.log(mod.counter); // 3
// console.log(mod.counterVal); // 3
// console.log(mod.incCounter()); // 4
// console.log(mod.counter); // 3
// console.log(mod.counterVal); // 4

// ---ES6 模块---
console.log(mod.counter); // 3
console.log(mod.counterVal); // 3
console.log(mod.incCounter()); // 4
console.log(mod.counter); // 4
console.log(mod.counterVal); // 4
