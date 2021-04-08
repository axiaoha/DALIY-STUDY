// function create(obj) {
//   console.log(obj === Array.prototype);
//   function F() {}
//   F.prototype = obj;
//   console.log(F.prototype === Array.prototype);
//   return new F();
// }
// const obj = create(Array.prototype);
// const obj1 = Object.create(Array.prototype);
// obj.push = function () {};
// // obj1.push = function () {};

// console.log(obj.push);
// // console.log(obj1.push);
// console.log(Array.prototype.push);

function _objectCreate(proto, propertiesObject = {}) {
  // if (
  //   typeof proto !== "object" ||
  //   typeof proto !== "function" ||
  //   proto !== null
  // ) {
  //   throw "Object prototype may only be an Object or null:" + proto;
  // }
  let res = {};
  res.__proto__ = proto;
  Object.defineProperties(res, propertiesObject);
  return res;
}
var obj = _objectCreate(
  { p: "p" },
  {
    p1: {
      value: 123,
      enumerable: true,
      configurable: true,
      writable: true,
    },
    p2: {
      value: "abc",
      enumerable: true,
      configurable: true,
      writable: true,
    },
  }
);
console.log(obj);
console.log(obj.p);
