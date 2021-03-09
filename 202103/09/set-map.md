**数据结构**

计算机存储、组织数据的方式

js 数据结构：

### Set

**特点**

类似于数组，成员值唯一，没有重复的值

Set 的遍历顺序就是插入顺序

Set 加入值的时候，不会发生类型转换，类似于精确相等运算符（`===`），主要的区别是向 Set 加入值时认为`NaN`等于自身，而精确相等运算符认为`NaN`不等于自身。

**属性方法**

- `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
- `Set.prototype.size`：返回`Set`实例的成员总数。
- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。
- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

**应用**

数组去重

字符串去重

并集（Union）

交集（Intersect）

差集（Difference）

### WeakSet

**WeakSet 和 Set 的区别**

- WeakSet 的成员只能是对象，而不能是其他类型的值
- WeakSet 中的对象都是`弱引用`，即`垃圾回收机制`不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
- WeakSet 不可遍历,没有`size`属性(WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的)

**属性方法**

- `WeakSet.prototype.add(value)`：向 WeakSet 实例添加一个新成员。
- `WeakSet.prototype.delete(value)`：清除 WeakSet 实例的指定成员。
- `WeakSet.prototype.has(value)`：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

**垃圾回收机制**

垃圾回收机制依赖引用计数，如果一个值的引用次数不为`0`，垃圾回收机制就不会释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。

### Map

**特点**

类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键

Map 的遍历顺序就是插入顺序

**属性方法**

- `size`
- `Map.prototype.set(key, value)`
- `Map.prototype.get(key)`
- `Map.prototype.has(key)`
- `Map.prototype.delete(key)`
- `Map.prototype.clear()`
- `Map.prototype.keys()`：返回键名的遍历器。
- `Map.prototype.values()`：返回键值的遍历器。
- `Map.prototype.entries()`：返回所有成员的遍历器。
- `Map.prototype.forEach()`：遍历 Map 的所有成员。

### WeakMap

**WeakMap 与 map 的区别**

- `WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名
- `WeakMap`的键名所指向的对象，不计入垃圾回收机制。(WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。)
- 没有遍历方法

### 面试题

垃圾回收机制与内存泄漏

set 和 WeakSet 的区别

map 和 WeakMap 的区别

set 和 map 的区别
