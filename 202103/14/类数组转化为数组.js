function arrayLike() {
  console.log(arguments);
  console.log([...arguments]);
  console.log(Array.from(arguments));
  console.log(Array.prototype.slice.call(arguments));
  console.log(Array.prototype.concat.apply([], arguments));
}
arrayLike(1, 2, 3, 4, 5);
