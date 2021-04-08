const arr = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];

console.log("way1:", [...new Set(arr)]);

function unique1(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
        len--;
      }
    }
  }
  return arr;
}
console.log("way2:", unique1(arr));

function unique2(arr) {
  const res = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (res.indexOf(arr[i]) === -1) res.push(arr[i]);
  }
  return res;
}
console.log("way3:", unique2(arr));

function unique3(arr) {
  const res = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (!res.includes(arr[i])) res.push(arr[i]);
  }
  return res;
}
console.log("way4:", unique3(arr));

function unique4(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
console.log("way5:", unique4(arr));

function unique5(arr) {
  const map = new Map();
  let len = arr.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      res.push(arr[i]);
    }
  }
  return res;
}
console.log("way6:", unique5(arr));
