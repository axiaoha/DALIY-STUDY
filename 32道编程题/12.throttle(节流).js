// 持续触发事件，每隔一段时间，只执行一次事件
var count = 1;
var container = document.getElementById("container");
function getUserAction() {
  this.innerHTML = count++;
  // return count;
}

// 使用时间戳
// function throttle(fn, wait) {
//   var pre = 0;
//   return function () {
//     var now = +new Date();
//     if (now - pre >= wait) {
//       fn.apply(this, arguments);
//       pre = now;
//     }
//   };
// }

// 一种是设置定时器
function throttle(fn, wait) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        fn.apply(context, args);
        timeout = null;
      }, wait);
    }
  };
}

container.onmousemove = throttle(getUserAction, 3000);
