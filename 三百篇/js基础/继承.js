// 原型链继承
// 引用类型的属性被所有实例共享
// 创建子类实例时，不能向父类传参
// function Person() {
//   this.name = "axiaoha";
//   this.names = ["axiaoha", "zerobeak"];
// }
// Person.prototype = {
//   constructor: Person,
//   getNames: function () {
//     console.log(this.names);
//   },
// };
// function Child() {}
// Child.prototype = new Person();
// Child.prototype.constructor = Child;
// const child1 = new Child();
// const child2 = new Child();
// child1.getNames();
// child1.names.push("kong");
// child2.getNames();

// 借用构造函数（经典继承）
// function Person(name) {
//   this.name = "axiaoha";
//   this.names = ["axiaoha", "zerobeak"];
//   this.getNames = function () {
//     console.log(this.names);
//   };
// }
// function Child(name) {
//   Person.call(this, name);
// }
// const child1 = new Child("axiaoha");
// child1.names.push("kong");
// child1.getNames();
// const child2 = new Child("zerobaek");
// child2.getNames();

// 组合继承
// function Person(name) {
//   this.name = "axiaoha";
//   this.names = ["axiaoha", "zerobeak"];
// }
// Person.prototype = {
//   constructor: Person,
//   getNames: function () {
//     console.log(this.names);
//   },
// };
// function Child(name, age) {
//   Person.call(this, name);
//   this.age = age;
// }
// Child.prototype = new Person();
// Child.prototype.constructor = Child;
// const child1 = new Child("axiaoha", 24);
// child1.names.push("kong");
// child1.getNames();
// const child2 = new Child("zerobaek", 24);
// child2.getNames();

// 原型式继承
// Object.create
// function createObj(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }

// 寄生式继承
// function createObj(obj) {
//   var o = Object.create(obj);
//   o.sayName = function () {
//     console.log("hi");
//   };
//   return o;
// }

// 寄生组合式继承
function Person(name) {
  this.name = "axiaoha";
  this.names = ["axiaoha", "zerobeak"];
}
Person.prototype = {
  constructor: Person,
  getNames: function () {
    console.log(this.names);
  },
};
function Child(name, age) {
  Person.call(this, name);
  this.age = age;
}
function prototype(child, person) {
  const proto = Object.create(person.prototype);
  proto.constructor = child;
  child.prototype = proto;
}
prototype(Child, Person);
const child1 = new Child("axiaoha", 24);
child1.names.push("kong");
child1.getNames();
const child2 = new Child("zerobaek", 24);
child2.getNames();
