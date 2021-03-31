// 数组扁平化是指将一个多维数组变为一个一维数组;
const arr = [1, [2, [3, [4, 5]]], 6];
const arr1 = [1, 2, , 4, 5];

// -----只展开一层-----
console.log(arr.flat()); // [ 1, 2, [ 3, [ 4, 5 ] ], 6 ]
console.log(arr.reduce((acc, val) => acc.concat(val), [])); //[ 1, 2, [ 3, [ 4, 5 ] ], 6 ]
console.log([].concat(...arr)); //[ 1, 2, [ 3, [ 4, 5 ] ], 6 ]

// -----展开多层-----
// 递归
// 1、Array.prototype.flat
console.log(arr.flat(Infinity)); // [ 1, 2, 3, 4, 5, 6 ]
// 2、reduce、concat、isArray、递归
function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
}
console.log(flatDeep(arr, Infinity));

// 非递归
// 1、使用堆栈stack
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}
console.log(flatten(arr));
// 2、正则
console.log(
  JSON.stringify(arr)
    .replace(/\[|\]/g, "")
    .split(",")
    .map((item) => Number(item))
);
// 3、generator
const iterRes = [];
function* iterflatten(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      yield* iterflatten(arr[i]);
    }
  } else {
    yield arr;
  }
}
// for (let x of iterflatten(arr)) {
//   iterRes.push(x);
// }
// console.log(iterRes);
console.log([...iterflatten(arr)]);
