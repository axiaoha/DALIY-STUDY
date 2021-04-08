// 防抖的原理就是：在事件触发 n 秒后才执行，如果在一个事件触发的 n 秒内又触发了这个事件，以新的事件的时间为准，n 秒后才执行，
// 总之，就是要等触发完事件 n 秒内不再触发事件，才执行

var count = 1;
var container = document.getElementById("container");
function getUserAction() {
  this.innerHTML = count++;
  return count;
}
// container.onmousemove = getUserAction;
// function debounce(fn, wait) {
//   var timer;
//   return function () {
//     var context = this;
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//       fn.apply(context, arguments);
//     }, wait);
//   };
// }
function debounce(func, wait, immediate) {
  var timeout, result;

  return function () {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
    console.log("result", result);
    return result;
  };
}
container.onmousemove = debounce(getUserAction, 1000, true);
