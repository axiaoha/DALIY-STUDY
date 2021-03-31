Function.prototype.apply = function (context, args) {
  if (typeof this !== "function") {
    throw new Error("type error");
  }
  context = context || globalThis;
  const fn = Symbol("fn");
  context[fn] = this;
  const res = context[fn](args);
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
bar.apply(null); // 2
console.log(bar.apply(obj, ["kevin", 18]));
