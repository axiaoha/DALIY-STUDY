function myInstanceof(left, right) {
  if (typeof left !== "object" || left === null || typeof right !== "function")
    return false;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
const obj = new Object();
console.log(myInstanceof(obj, null));
