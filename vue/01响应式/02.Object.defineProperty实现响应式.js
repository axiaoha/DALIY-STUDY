// Object.defineProperty实现响应式
// 监听对象，监听数组
// 复杂对象，深度监听
// 几个缺点:
// 深度监听，需要递归到底，一次性计算量大
// 无法监听新增属性/删除属性(需要通过Vue.set Vue.delete)
// 无法原生监听数组，需要特殊处理

function updataView() {
  console.log("视图更新");
}
// 重新定义数组原型
const oldArrayProperty = Array.prototype;
// 创建新对象，原型指向oldArrayProperty，再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
["push", "pop", "shift", "unshift", "splice"].forEach((methodName) => {
  arrProto[methodName] = function () {
    updataView();
    oldArrayProperty[methodName].call(this, ...arguments);
  };
});

// 重新定义属性，监听起来
function defineReactive(target, key, value) {
  // 深度监听
  observer(value);

  // 核心API
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newVal) {
      if (newVal !== value) {
        // 深度监听
        observer(newVal);

        // 设置新值
        value = newVal;

        // 触发视图更新
        updataView();
      }
    },
  });
}
function observer(target) {
  if (typeof target !== "object" || target === null) {
    // 不是对象或者数组
    return target;
  }

  if (Array.isArray(target)) {
    target.__proto__ = arrProto;
  }
  // 重新定义各个属性
  for (const key in target) {
    defineReactive(target, key, target[key]);
  }
}
// 准备数据
const data = {
  name: "axiaoha",
  age: 23,
  info: {
    address: "北京", // 需要深度监听
  },
  nums: [10, 20, 30],
};
// 监听数据
observer(data);
// 测试
// data.name = "zerobaek";
// data.age = 18;
// data.info.address = "深圳";
// data.age = {
//   age: 21,
// };
// data.age.age = 22;
data.nums.push(4);
