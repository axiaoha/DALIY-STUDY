const arr = [1, [2, [3, [4, 5]]], 6];

console.log(arr.flat());
console.log(arr.reduce((acc, val) => acc.concat(val), []));
console.log([].concat(...arr));

console.log(arr.flat(Infinity));

function flatArr(arr, deep) {
  return deep > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatArr(val, deep - 1) : val),
        []
      )
    : arr.slice();
}
console.log(flatArr(arr, Infinity));

function flatDeep(arr) {
  const stack = [...arr];
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
console.log(flatDeep(arr));

console.log(
  JSON.stringify(arr)
    .replace(/\[|\]/g, "")
    .split(",")
    .map((item) => Number(item))
);
