// let a = [];
// let b = [];
// for (var i = 0; i < 5; i++) {
//   // a[i] = function () {
//   //   console.log(i);
//   // };
//   (function (i) {
//     console.log(i);
//   })(i);
//   // setTimeout(() => {
//   //   console.log(i);
//   // });
// }
// // a[2](); // 5

// for (let i = 0; i < 5; i++) {
//   b[i] = function () {
//     console.log(i);
//   };
// }
// // b[2](); // 2

var a = [];
{
  let k = 0;
  for (; k < 5; ) {
    let i = k; // 这一步是内部进行转换的，可以看看下面我对 @边城 的神奇代码的理解
    a[i] = function () {
      console.log(i);
    };
    console.log("in block", i);
    console.log("in for expression", k);
    k++;
  }
}
a[4](); // 6
