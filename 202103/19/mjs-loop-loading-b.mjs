// import { foo } from "./mjs-loop-loading-a.mjs";
// console.log("b.mjs");
// // console.log(foo); // 报错
// // export let bar = "bar";

// console.log(foo());
// // 因为函数具有提升作用
// function bar() {
//   return "bar";
// }
// export { bar };

import { even } from "./mjs-loop-loading-a.mjs";
export function odd(n) {
  return n !== 0 && even(n - 1);
}
