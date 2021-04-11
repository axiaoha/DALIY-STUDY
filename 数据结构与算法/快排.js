Object.prototype.quickSort = function () {
  const rec = function (arr) {
    if (arr.length === 0 || arr.length === 1) return arr;
    let left = [],
      right = [],
      mid = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };
  const res = rec(this);
  res.forEach((item, index) => {
    this[index] = item;
  });
  return res;
};
const arr = [5, 4, 3, 2, 1];
console.log(arr.quickSort());
console.log(arr);
