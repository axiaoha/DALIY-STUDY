var resolved = Promise.resolve(42);
var rejected = Promise.reject(-1);
var alsoRejected = Promise.reject(Infinity);

Promise.race([resolved, rejected, alsoRejected]).then(function (result) {
  console.log(result); // 42
});

Promise.any([resolved, rejected, alsoRejected]).then(function (result) {
  console.log(result); // 42
});

// Promise.any([rejected, alsoRejected]).catch(function (results) {
//   console.log(results); // [-1, Infinity]
// });
