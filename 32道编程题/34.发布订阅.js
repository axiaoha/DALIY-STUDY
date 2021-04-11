// https://github.com/sisterAn/JavaScript-Algorithms/issues/110
class EventEmitter {
  constructor() {
    this.listeners = Object.create(null);
  }
  // 注册事件
  $on = (event, listener) => {
    if (!this.listeners[event]) {
      this.listeners[event] = [listener];
    } else {
      this.listeners[event].push(listener);
    }
  };
  $once = (event, listener) => {
    function one() {
      listener.apply(this, arguments);
      this.$off(event);
    }
    this.$on(event, one);
  };
  // 取消订阅
  $off = (event, listener) => {
    if (!this.hasbind(event)) {
      console.log("not find");
      return;
    }
    if (!listener) {
      delete this.listeners[event];
    } else {
      this.listeners[event].filter((e) => {
        return e !== listener;
      });
    }
  };
  // 触发
  $emit = (event, ...args) => {
    this.listeners[event].forEach((e) => {
      e.apply(this, args);
    });
  };
  hasbind = (event) => {
    return this.listeners[event] && this.listeners[event].length;
  };
}
const baseEvent = new EventEmitter();
function cb(value) {
  console.log("hello " + value);
}
baseEvent.$once("click", cb);
// baseEvent.off("click")
baseEvent.$emit("click", "2020");
// hello 2020
console.log(baseEvent.listeners);
