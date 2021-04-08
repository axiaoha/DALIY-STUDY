// Object.defineProperty的基本用法(监听data变化的核心api)
const data = {};
Object.defineProperty(data, "name", {
  get: function () {
    console.log("get");
    return name;
  },
  set: function (newVal) {
    console.log("set");
    name = newVal;
  },
});
data.name = "axiaoha";
// set
// get
console.log(data.name); // axiaoha
