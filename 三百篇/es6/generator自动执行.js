// https://github.com/mqyqingfeng/Blog/issues/99

// 单个异步任务
// var fetch = require("node-fetch");
// function* gen() {
//   var url = "https://api.github.com/users/github";
//   var result = yield fetch(url);
//   console.log(result.bio);
// }
// var g = gen();
// var result = g.next();
// console.log("value", result.value);
// result.value
//   .then(function (data) {
//     // https://developer.mozilla.org/zh-CN/docs/Web/API/Body/json
//     // data.json()返回一个 Promise，Promise 的解析 resolve 结果是将文本体解析为 JSON。
//     return data.json();
//   })
//   .then(function (data) {
//     g.next(data);
//   });

// 多个异步任务
// var fetch = require("node-fetch");
// function* gen() {
//   var r1 = yield fetch("https://api.github.com/users/github");
//   var r2 = yield fetch("https://api.github.com/users/github/followers");
//   var r3 = yield fetch("https://api.github.com/users/github/repos");
//   console.log([r1.bio, r2[0].login, r3[0].full_name].join("\n"));
// }
// 获取执行结果，下面的比较繁琐，需要考虑优化
// var g = gen();
// g.next()
//   .value.then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     return g.next(data).value;
//   })
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     return g.next(data).value;
//   })
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     g.next(data);
//   });
// 使用递归进行优化
// function run(gen) {
//   var g = gen();
//   function next(data) {
//     var res = g.next(data);
//     if (res.done) return;
//     res.value
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         next(data);
//       });
//   }
//   next();
// }
// run(gen);

// // 通用性调整 - 多个异步任务
// var fetch = require("node-fetch");
// function* gen() {
//   // r1表示response流
//   var r1 = yield fetch("https://api.github.com/users/github");
//   // json1表示解析为json的文本体
//   var json1 = yield r1.json();
//   var r2 = yield fetch("https://api.github.com/users/github/followers");
//   var json2 = yield r2.json();
//   var r3 = yield fetch("https://api.github.com/users/github/repos");
//   var json3 = yield r3.json();
//   console.log([json1.bio, json2[0].login, json3[0].full_name].join("\n"));
// }
// function run(gen) {
//   var g = gen();
//   function next(data) {
//     var res = g.next(data);
//     if (res.done) return;
//     res.value.then((data) => {
//       next(data);
//     });
//   }
//   next();
// }
// run(gen);

// 回调函数
function fetchData(url) {
  return function (cb) {};
}
