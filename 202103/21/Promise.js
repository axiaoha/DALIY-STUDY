// 异步加载图片
// function loadImageAsync(url) {
//   return new Promise(function (resolve, reject) {
//     const image = new Image();
//     image.onload = function () {
//       resolve(image);
//     };
//     image.onerror = function () {
//       reject(new Error("未加载成功：" + url));
//     };
//     image.src = url;
//   });
// }

// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error("fail")), 3000);
// });
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000);
// });
// p2.then((result) => console.log(result)).catch((error) => console.log(error));
