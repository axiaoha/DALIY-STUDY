// -----数组读取负数的索引-----
// function createArray(...elements) {
//   let handler = {
//     get(target, propKey, receiver) {
//       let index = Number(propKey);
//       if (index < 0) {
//         propKey = target.length + index;
//       }
//       return target[propKey];
//     },
//   };
//   let target = [];
//   target.push(...elements);
//   return new Proxy(target, handler);
// }
// let arr = createArray("a", "b", "c");
// console.log(arr[-1]);

// -----链式操作-----
// var pipe = function (value) {
//   var funcStack = [];
//   var oproxy = new Proxy(
//     {},
//     {
//       get: function (pipeObject, fnName) {
//         if (fnName === "get") {
//           return funcStack.reduce(function (val, fn) {
//             console.log(fn);
//             return fn(val);
//           }, value);
//         }
//         funcStack.push(global[fnName]);
//         return oproxy;
//       },
//     }
//   );
//   return oproxy;
// };
// global.double = (n) => n * 2;
// global.pow = (n) => n * n;
// global.reverseInt = (n) => n.toString().split("").reverse().join("") | 0;
// console.log(pipe(3).double.pow.reverseInt.get);

const target = {
  a: "a",
};
const handler = {
  get: function (target, prop, receiver) {
    console.log(this === handler); //true
    return target[prop];
  },
};
const proxy = new Proxy(target, handler);
target.b = "b";
console.log(proxy.foo); //undefined
console.log(target.a); //a
console.log(proxy.a); //a
console.log(target.b); //b
console.log(proxy.b); //b
