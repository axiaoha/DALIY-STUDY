// function* dataConsumer(x) {
//   // console.log("Started");
//   console.log(`1. ${yield}`);
//   console.log(`2. ${yield}`);
//   return "result";
// }
// let it = dataConsumer();

// console.log(it.next(1));
// // console.log(it.next(2));
// // it.next("a");
// // it.next("b");

let obj = {
  [Symbol.iterator]: function* () {
    var y = 2 * (yield 1);
    var z = yield y / 3;
    yield 3;
    return y + z;
  },
};
for (let val of obj) {
  console.log(val);
}
