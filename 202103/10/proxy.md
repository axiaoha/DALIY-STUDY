### 概述

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

要使得 Proxy 起作用，必须针对 Proxy 实例（上例是 proxy 对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。

如果 handler 没有设置任何拦截，那就等同于直接通向原对象。

### Proxy 的拦截操作

13 种：

- get：
  参数：目标对象、属性名、proxy 实例
  拦截操作：属性的读取操作
- set：
  参数：目标对象、属性名、属性值、proxy 实例
  拦截操作：属性的赋值操作
- apply：
  参数：目标对象（函数）、上下文、目标对象的参数数组
  拦截操作：函数调用、call、apply
- has:
  参数：目标对象、需要查询的属性名
  拦截操作：HasProperty 对象是否具有某个属性，对 in 运算符生效，对 for...in 不生效，has()方法不判断一个属性是对象自身的属性，还是继承的属性
- construct:
  参数：目标对象、构造函数的参数数组、new 命令作用的构造函数
  拦截操作：拦截 new 命令
- deleteProperty:
  参数：目标对象、属性值
  拦截操作：拦截 delete 操作
- defineProperty:
  参数：目标对象、属性值、属性描述符 descriptor
  拦截操作：拦截 Object.defineProperty()操作
- getOwnPropertyDescriptor:
  参数：目标对象、属性值
  拦截操作：拦截 Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者 undefined
- getPrototypeOf:
  参数：目标对象
  拦截操作：拦截获取对象原型，返回值必须是对象或者 null，否则报错
- isExtensible():
  参数：目标对象
  拦截操作：拦截 Object.isExtensible()操作
- ownKeys():
  参数：目标对象
  拦截操作：拦截 Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()、Object.keys()、for...in 循环操作
- preventExtensions():
  参数：目标对象
  拦截操作：拦截 Object.preventExtensions()操作
- setPrototypeOf():
  参数：目标对象
  拦截操作：拦截 Object.setPrototypeOf()

### Proxy.revocable()

Proxy.revocable()方法返回一个可取消的 Proxy 实例

```js
let { proxy, revoke } = Proxy.revocable(target, handler);
```

proxy 属性是 Proxy 实例，revoke 属性是一个函数，可以取消 Proxy 实例

### this 问题

在 Proxy 代理的情况下，目标对象内部的`this`关键字会指向 Proxy 代理

### 面试题

Proxy 与 Object.defineProperty 的对比：https://juejin.cn/post/6844903601416978439
