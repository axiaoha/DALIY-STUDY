// 3s
function red() {
  console.log("red");
}
// 1s
function green() {
  console.log("green");
}
// 2s
function yellow() {
  console.log("yellow");
}
function light(wait, cb) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(cb());
    }, wait);
  });
}
function run() {
  Promise.resolve()
    .then(() => {
      return light(3000, red);
    })
    .then(() => {
      return light(2000, yellow);
    })
    .then(() => {
      return light(1000, green);
    })
    .then(() => {
      run();
    });
}
run();
