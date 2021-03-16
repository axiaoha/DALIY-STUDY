// // this指向问题
// class Logger {
//   constructor() {
//     // 方式一：bind
//     // this.printName = this.printName.bind(this);
//   }
//   // 方式二：箭头函数
//   printName = (name = "there") => {
//     // printName (name = "there") => {
//     this.print(`Hello ${name}`); // this->undefined
//   };
//   print(text) {
//     console.log(text);
//   }
// }
// const logger = new Logger();
// const { printName } = logger;
// printName();

// 静态属性
// class MyClass {
//   constructor() {
//     console.log(MyClass.myStaticProp); // 42
//   }
//   static myStaticProp = 42;
// }
// const myClass = new MyClass();

// 私有方法和私有属性
class Point {
  #x;
  constructor(x = 0) {
    this.#x = +x;
  }
  get x() {
    return this.#x;
  }
  set x(value) {
    this.#x = +value;
  }
}
const p = new Point();
console.log(p.x);
console.log(p.#x);
