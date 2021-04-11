Object.prototype.bubbleSort1 = function () {
  let len = this.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (this[i] > this[j]) {
        const tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
      }
    }
  }
  return this;
};
Object.prototype.bubbleSort2 = function () {
  let low = 0,
    high = this.length - 1,
    len = this.length;
  while (low < high) {
    for (let i = low; i < high; i++) {
      if (this[i] > this[i + 1]) {
        const tmp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = tmp;
      }
    }
    high--;
    for (let i = high; i > low; i--) {
      if (this[i] < this[i - 1]) {
        const tmp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = tmp;
      }
    }
    low++;
  }
  return this;
};
const arr1 = [5, 4, 3, 2, 1];
console.log(arr1.bubbleSort1());
console.log(arr1);
const arr2 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(arr2.bubbleSort1());
console.log(arr2);
