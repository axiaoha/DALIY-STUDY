const arr = [1, [2, [3, [4, 5]]], 6];

// console.log(arr.flat(Infinity));

// function flatArr(arr, deep) {
//   return deep > 0
//     ? arr.reduce((acc, val) => {
//         return acc.concat(Array.isArray(val) ? flatArr(val, deep - 1) : val);
//       }, [])
//     : arr.slice();
// }
// console.log(flatArr(arr, Infinity));

function flatArr(arr) {
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    // const next = stack.pop();
    const next = stack.shift();
    if (Array.isArray(next)) {
      // stack.push(...next);
      stack.unshift(...next);
    } else {
      res.push(next);
    }
  }
  // return res.reverse();
  return res;
}
console.log(flatArr(arr));

// console.log(
//   JSON.stringify(arr)
//     .replace(/\[|\]/g, "")
//     .split(",")
//     .map((item) => Number(item))
// );
