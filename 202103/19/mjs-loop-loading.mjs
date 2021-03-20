import * as m from "./mjs-loop-loading-a.mjs";
import * as n from "./mjs-loop-loading-other.mjs";
console.log(m.even(10)); //true
console.log(m.counter); //6
n.next(20);
// console.log(m.even(20)); //true
// console.log(m.counter); //17
