// 4min
// Function.prototype.call = function (context) {
//   var context = context || globalThis;
//   context.fn = this;
//   var args = [];
//   for (var i = 1; i < arguments.length; i++) {
//     args.push("arguments[" + i + "]");
//   }
//   var res = eval("context.fn(" + args + ")");
//   delete context.fn;
//   return res;
// };

Function.prototype.call = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("type error");
  }
  context = context || globalThis;
  const fn = Symbol("fn");
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];
  return res;
};

var value = 2;
var obj = {
  value: 1,
};
function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age,
  };
}
bar.call(null); // 2
console.log(bar.call(obj, "kevin", 18));
