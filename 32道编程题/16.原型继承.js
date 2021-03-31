function Person(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}
Person.prototype = {
  constructor: Person,
  getName: function () {
    console.log(this.name);
  },
};
function Child(name, age) {
  Person.call(this, name);
  this.age = age;
}
Child.prototype = Object.create(Person.prototype);
Child.constructor = Child;
const child = new Child("axiaoha");
child.getName();
