### 简介

类的数据类型就是函数，类本身就指向构造函数，类的所有方法都定义在类的`prototype`属性上面

### 静态方法

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上 static 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
如果静态方法包含 this 关键字，这个 this 指的是类，而不是实例。
父类的静态方法，可以被子类继承。
静态方法也是可以从 super 对象上调用的。

### 实例属性的新写法

实例属性除了定义在 constructor()方法里面的 this 上面，也可以定义在类的最顶层。

### 静态属性

类.prop
ES6 明确规定，Class 内部只有静态方法，没有静态属性(现在可以使用 static 关键字)

### 私有方法和私有属性

在属性名之前，使用#表示
私有属性，只能在类的内部使用。如果在类的外部使用，就会报错。
#x 和 x 是两个不同的属性

### new.target 属性

如果构造函数不是通过 new 命令或 Reflect.construct()调用的，new.target 会返回 undefined，因此 new target 可以用来确定构造函数是怎么调用的
子类继承父类时，new.target 会返回子类

### 面试题

##### 类与构造函数的区别

- 类必须使用 new 调用
  普通构造函数不用 new 也可以执行
- 类不存在变量提升（与继承有关，如果父类是通过 class 表达式定义的，子类有可能会被提升到代码头部）
  普通构造函数存在

##### 类的 this 指向问题

##### new target

确保构造函数只能通过 new 命令调用

```js
function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error("必须使用 new 命令生成实例");
  }
}
```

不能独立使用、必须继承后才能使用的类

```js
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("本类不能实例化");
    }
  }
}
class Rectangle extends Shape {
  constructor(length, width) {
    super();
    // ...
  }
}
var x = new Shape(); // 报错
var y = new Rectangle(3, 4); // 正确
```
