// Function.prototype.apply
Function.prototype.apply = function (context = window, args) {
  if (!context) {
    context = globalThis;
  }
  if (typeof this !== "function") {
    throw new Error("type error");
  }
  const fn = Symbol("fn");
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];
  return res;
};

// Function.prototype.call
Function.prototype.call = function (context = window, ...args) {
  if (!context) {
    context = globalThis;
  }
  if (typeof this !== "function") {
    throw new Error("type error");
  }
  const fn = Symbol("fn");
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];
  return res;
};

// Function.prototype.bind
Function.prototype.bind = function (context = window, ...args) {
  if (!context) {
    context = globalThis;
  }
  if (typeof this !== "function") {
    throw new Error("type error");
  }
  const fn = Symbol("fn");
  context[fn] = this;
  var self = this;
  return function F() {
    if (this instanceof F) {
      console.log("this", this);
      return new self(...args, ...arguments);
    }
    const res = context[fn](...args, ...arguments);
    delete context[fn];
    return res;
  };
};

function fn() {
  [...arguments].forEach((item) => {
    this[item] = item;
  });
  return this;
}
let obj = {
  a: "a",
};
console.log(fn.apply(obj, ["b", "c"])); //{a: "a", b: "b", c: "c"}
console.log(fn.call(obj, "b", "c")); //{a: "a", b: "b", c: "c"}
console.log(fn.bind(obj, "b", "c")("d")); //{a: "a", b: "b", c: "c"}
console.log(new (fn.bind(obj, "b", "c"))("d")); //{a: "a", b: "b", c: "c"}
