// import { bar } from "./mjs-loop-loading-b.mjs";
// console.log("a.mjs");
// console.log(bar());
// // export let foo = "foo";

// function foo() {
//   return "foo";
// }
// export { foo };
// // b.mjs
// // foo
// // a.mjs
// // bar

import { odd } from "./mjs-loop-loading-b.mjs";
export var counter = 0;
export function even(n) {
  counter++;
  return n === 0 || odd(n - 1);
}
