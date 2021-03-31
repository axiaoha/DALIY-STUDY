// 模拟一个迭代器
function makeIterator(arr) {
  let nextIdx = 0;
  return {
    next: function () {
      return nextIdx < arr.length
        ? { value: arr[nextIdx++], done: false }
        : { value: undefined, done: true };
    },
  };
}
let it = makeIterator(["a", "b"]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
