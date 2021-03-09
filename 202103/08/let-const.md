### let 命令

1. let 作用于代码块即被{}包裹的区域
2. 不存在变量声明提升，let 所声明的变量一定要先声明后使用
3. 暂时性死区：只要块级作用域内存在 let 命令，let 所声明的变量就“绑定”（binding）这个区域，在 let 命令声明变量之前，都属于变量的“死区”，在此之前使用该变量都会报错
4. 不允许重复声明

### 块级作用域

ES5 只有全局作用域和函数作用域，没有块级作用域，造成的影响：

1. 内层变量由于变量提升导致外层变量被覆盖
2. 用于计数的循环变量泄露为全局变量

let 实际上为 JavaScript 新增了块级作用域。

### const 命令

1. const 一旦声明变量，值不能改变且必须立即初始化

2. 不存在变量声明提升

3. 不允许重复声明

4. 暂时性死区

5. const 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动

const 声明一个对象，如果不希望对象被更改，需要冻结对象及其对象的属性

```js
let constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === "object") {
      constantize(obj[key]);
    }
  });
};
```

### 变量声明的六种方法

var

function

let

const

import

class

### 顶层对象

浏览器环境：window 对象

node：global 对象

在 es5：顶层对象的属性赋值与全局变量的赋值，是同一件事

导致的问题：

无法在编译时就报变量未被声明的错误，运行时才能被发现

### globalThis 对象

代码运行的环境不同会导致引用的顶层对象不一样

浏览器里面，顶层对象是 window，但 Node 和 Web Worker 没有 window。

浏览器和 Web Worker 里面，self 也指向顶层对象，但是 Node 没有 self。

Node 里面，顶层对象是 global，但其他环境都不支持。

| 环境       | window | self | global | globalThis |
| ---------- | ------ | ---- | ------ | ---------- |
| 浏览器     | ✔️     | ✔️   | ×      | ✔️         |
| Web Worker | ×      | ✔️   | ×      | ✔️         |
| node       | ×      | ×    | ✔️     | ✔️         |

### 变量提升

只会提升声明，不会提升其初始化
函数和变量相比，会被优先提升。这意味着函数会被提升到更靠前的位置

```js
var x = 5;
function x() {
  return 6;
}
console.log(x); //5
```

### 面试题

- var、let 和 const 区别的实现原理是什么https://muyiy.cn/question/js/83.html

- let const 特点
- 块级作用域
- 暂时性死区
