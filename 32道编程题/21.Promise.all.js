Promise.myAll = function (arr) {
  const res = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    function addData(item, index) {
      count++;
      res[index] = item;
      if (count === arr.length) {
        resolve(res);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      const data = arr[i];
      if (data instanceof Promise) {
        data
          .then((res) => {
            addData(res, i);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        addData(data, i);
      }
    }
  });
};
Promise.myAll([
  1,
  2,
  new Promise((res, rej) => {
    setTimeout(() => {
      res(3);
    }, 1000);
  }),
  4,
  5,
  6,
]).then((res) => {
  console.log("res", res);
});
