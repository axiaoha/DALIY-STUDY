// https://github.com/mqyqingfeng/Blog/issues/15

// 工厂模式
// 缺点：对象无法被识别，所有实例都指向同一个原型
// function createPerson(name) {
//   const o = new Object();
//   o.name = name;
//   o.getName = function () {
//     console.log(this.name);
//   };
//   return o;
// }
// const p = createPerson("axiaoha");
// p.getName();

// 构造函数模式
// 实例可以识别为一个特定的类型
// 每创建一个实例，都要重新创建一次方法
// function Person(name) {
//   this.name = name;
//   this.getName = function () {
//     console.log(this.name);
//   };
// }
// const p = new Person("axiaoha");
// p.getName();

// 原型模式
// 优点：方法不会被重建
// 缺点：属性和方法共享，不能初始化参数
// function Person() {}
// Person.prototype = {
//   constructor: Person,
//   name: "axiaoha",
//   getName: function () {
//     console.log(this.name);
//   },
// };
// const p = new Person();
// p.getName();

// 组合模式
// 共享和私有的分开管理
// function Person(name) {
//   this.name = name;
// }
// Person.prototype = {
//   constructor: Person,
//   getName: function () {
//     console.log(this.name);
//   },
// };
// const p = new Person("axiaoha");
// p.getName();

// 动态原型模式
// function Person(name) {
//   this.name = name;
//   if (typeof this.getName !== "function") {
//     // Person.prototype.getName = function () {
//     //   console.log(this.name);
//     // };
//     Person.prototype = {
//       constructor: Person,
//       getName: function () {
//         console.log(this.name);
//       },
//     };
//     return new Person(name);
//   }
// }
// const p1 = new Person("axiaoha");
// p1.getName();
// const p2 = new Person("zerobaek");
// p2.getName();

// 寄生构造函数模式
// function Person(name) {
//   const o = new Object();
//   o.name = name;
//   o.getName = function () {
//     console.log(this.name);
//   };
//   return o;
// }
// const p = new Person("axiaoha");
// p.getName();
// console.log(p instanceof Person); // false 一个特点
// console.log(p instanceof Object); // true

// 稳妥构造函数模式
// 所谓稳妥对象是指没有公共属性，方法不引用this对象
// 实例方法不引用this
// 不使用new操作符调用构造函数
// function Person(name) {
//   const o = new Object();
//   o.sayName = function () {
//     console.log(name);
//   };
//   return o;
// }
// const p = new Person("axiaoha");
// p.name = "zerobeak";
// p.sayName();
// console.log(p.name);
