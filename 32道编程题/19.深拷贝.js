// const cloneDeep1 = (target, hash = new WeakMap()) => {
//   // 对于传入参数处理
//   if (typeof target !== "object" || target === null) {
//     return target;
//   }
//   // 哈希表中存在直接返回
//   if (hash.has(target)) return hash.get(target);
//   const cloneTarget = Array.isArray(target) ? [] : {};
//   hash.set(target, cloneTarget);
//   // 针对Symbol属性
//   const symKeys = Object.getOwnPropertySymbols(target);
//   if (symKeys.length) {
//     symKeys.forEach((symKey) => {
//       if (typeof target[symKey] === "object" && target[symKey] !== null) {
//         cloneTarget[symKey] = cloneDeep1(target[symKey]);
//       } else {
//         cloneTarget[symKey] = target[symKey];
//       }
//     });
//   }
//   for (const i in target) {
//     if (Object.prototype.hasOwnProperty.call(target, i)) {
//       cloneTarget[i] =
//         typeof target[i] === "object" && target[i] !== null
//           ? cloneDeep1(target[i], hash)
//           : target[i];
//     }
//   }
//   return cloneTarget;
// };

const cloneDeep1 = function (arr) {
  if (typeof arr !== "object") {
    return arr;
  }
  const res = Array.isArray(arr) ? [] : {};
  for (let key in arr) {
    if (arr.hasOwnProperty(key)) {
      res[key] = typeof arr[key] === "object" ? cloneDeep1(arr[key]) : arr[key];
    }
  }
  return res;
};
// test
var arr = [{ old: "old" }, ["old"]];
// var new_arr = arr.concat();
var new_arr = cloneDeep1(arr);
arr[0].old = "new";
arr[1][0] = "new";
console.log(arr); // [{old: 'new'}, ['new']]
console.log(new_arr); // [{old: 'new'}, ['new']]
