Promise.myRace = function (arr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};
Promise.myRace([
  new Promise((res, rej) => {
    setTimeout(() => {
      rej(1);
    }, 1000);
  }),
  2,
  new Promise((res, rej) => {
    setTimeout(() => {
      res(3);
    }, 1000);
  }),
  4,
  5,
  6,
]).then(
  (res) => {
    console.log("res", res);
  },
  (err) => {
    console.log(err);
  }
);
