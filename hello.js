/*const sayHello  = function () {
  console.log("Hello, world");
}*/

const sayHello  = function (name = "World") {
  console.log("Hello, " + name);
}

sayHello("James");