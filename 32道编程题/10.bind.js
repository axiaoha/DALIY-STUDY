Function.prototype.bind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("type error");
  }
  context = context || window;
  const self = this;
  return function fn() {
    if (this instanceof fn) {
      return new self(...args, ...arguments);
    }
    return self.apply(context, [...args, ...arguments]);
  };
};

var value = 2;
var foo = {
  value: 1,
  bar: bar.bind(null),
};
function bar() {
  console.log(this.value);
}
foo.bar(); // 2
