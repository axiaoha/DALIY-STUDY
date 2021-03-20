var counter = 3;
var counterVal = 3;
function incCounter() {
  counter++;
  counterVal++;
  return counter;
}

// ---CommonJS---
// module.exports = {
//   counter: counter,
//   incCounter: incCounter,
//   // 取值器函数
//   get counterVal() {
//     return counterVal;
//   },
// };

// ---ES6 模块---
export { counter, counterVal, incCounter };
