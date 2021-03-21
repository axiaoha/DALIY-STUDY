// // Promise.prototype.catch()
// const promise = new Promise(function (resolve, reject) {
//   throw new Error("test");
// });
// // 捕获异常1:不推荐
// promise.then(
//   () => {
//     console.log("resolve");
//   },
//   (err) => {
//     console.log("捕获异常1:", err.message);
//   }
// );
// // 捕获异常2:
// promise.catch(function (err) {
//   console.log("捕获异常2:", err.message);
// });
// // 捕获异常3:
// const promise1 = new Promise(function (resolve, reject) {
//   try {
//     throw new Error("test");
//   } catch (e) {
//     reject(e);
//   }
// });
// promise1.catch(function (err) {
//   console.log("捕获异常3:", err.message);
// });
// // 捕获异常4:
// const promise2 = new Promise(function (resolve, reject) {
//   reject(new Error("test"));
// });
// promise2.catch(function (err) {
//   console.log("捕获异常4:", err.message);
// });

const someAsyncThing = function () {
  return new Promise(function (resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};
someAsyncThing()
  .then(function () {
    return someOtherAsyncThing();
  })
  .catch(function (error) {
    console.log("oh no", error.message);
    // 下面一行会报错，因为 y 没有声明
    y + 2;
  })
  .then(
    function () {},
    function (err) {
      console.log("carry on", err.message);
    }
  );
