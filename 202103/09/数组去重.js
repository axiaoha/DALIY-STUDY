const arr = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]

// -----set-----
// console.log(Array.from(new Set(arr)));
// console.log([...new Set(arr)]);

// -----两层for、splice-----
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   for (let j = i + 1; j < len; j++) {
//     if (arr[i] === arr[j]) {
//       arr.splice(j, 1);
//       len--;
//       j--;
//     }
//   }
// }
// console.log(arr);

// -----indexOf-----
// let res = [];
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   if (arr.indexOf(arr[i]) === i) {
//     res.push(arr[i]);
//   }
// }
// console.log(res);

// -----includes-----
// let res = [];
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   if (!res.includes(arr[i])) {
//     res.push(arr[i]);
//   }
// }
// console.log(res);

// -----filter-----
// console.log(
//   arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   })
// );

// -----map-----
let res = [];
let map = new Map();
let len = arr.length;
for (let i = 0; i < len; i++) {
  if (!map.has(arr[i])) {
    map.set(arr[i], true);
    res.push(arr[i]);
  }
}
console.log(res);
