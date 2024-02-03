//接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，
//需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
//TypeScript 接口定义如下：
//interface interface_name {
// }
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  对象 ");
console.log(employee.firstName);
console.log(employee.lastName);
var newFunc = {
    firstNameA: "Join",
    lastNameA: "Watson",
    sayHelloA: function (a, b) { return a - b; }
};
console.log(newFunc.firstNameA);
console.log(newFunc.lastNameA);
console.log(newFunc.sayHelloA(10, 5));
var list2 = ["Google", "ruNoob", "taoBao"];
var ageList;
// 类型正确
ageList["ruNoob"] = 15;
var hello;
hello.firstNameA = "AAA";
hello.lastNameA = "BBB";
hello.sayHelloA(3, 3);
console.log(hello.firstNameA);
console.log(hello.lastNameA);
console.log(hello.sayHelloA(3, 3));
