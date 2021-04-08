const obj = { a: 100, b: 200 };
console.log(obj.a);
console.log(obj.b);
console.log(obj.c); // undefined

// 使用with，能改变{}内自由变量的查找方式
// 将{}内自由变量，当作obj的属性来查找
// with要慎用，它打破了作用域规则，易读性变差
// var c = 1;
with (obj) {
  console.log(a);
  console.log(b);
  console.log(c); // 会报错c is not defined
}
