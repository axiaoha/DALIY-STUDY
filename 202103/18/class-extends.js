// class A {
//   #count = 0;
//   static hello() {
//     console.log("hello world", A.prototype);
//   }
//   getPrivateCount() {
//     console.log(this.#count);
//   }
// }
// class B extends A {}
// const a = new A();
// const b = new B();
// B.hello();
// console.log(a.getPrivateCount());
// console.log(Object.getPrototypeOf(B) === A);

// super this指向问题
// class A {
//   constructor() {
//     this.x = 1;
//   }
//   printA() {
//     console.log("A");
//   }
//   static printB() {
//     console.log("B", this.x);
//   }
// }
// class B extends A {
//   static x = 3;
//   constructor() {
//     super();
//     this.x = 2;
//     console.log(super.valueOf() instanceof B);
//   }
//   static m() {
//     // super.prototype.printA();
//     super.printB();
//     console.log(super.valueOf() === B);
//   }
// }
// // B.x = 3;
// B.m(); // 3

// mixin
// function mix(...mixins) {
//   class Mix {
//     constructor() {
//       for (let mixin of mixins) {
//         copyProperties(this, new mixin()); // 拷贝实例属性
//       }
//     }
//   }
//   for (let mixin of mixins) {
//     copyProperties(Mix, mixin); // 拷贝静态属性
//     copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
//   }
//   return Mix;
// }
// function copyProperties(target, source) {
//   // 使用Reflect.ownKeys，而不使用Object.keys是因为可以返回enumerable: false的属性
//   for (let key of Reflect.ownKeys(source)) {
//     if (key !== "constructor" && key !== "prototype" && key !== "name") {
//       let desc = Object.getOwnPropertyDescriptor(source, key);
//       Object.defineProperty(target, key, desc);
//     }
//   }
// }
// class A {
//   constructor() {
//     this.A = "A";
//   }
// }
// class B {
//   constructor() {
//     this.B = "B";
//   }
// }
// class C extends mix(A, B) {
//   constructor() {
//     super();
//     this.C = "C";
//   }
// }
// console.log(A);
// console.log(new C());

const a = { a: 1 };
const b = Object.create(a, {
  hello: {
    value: "hello",
    writable: true,
    configurable: true,
    enumerable: true,
  },
});
console.log(b);
