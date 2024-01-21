//接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，
//需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
//TypeScript 接口定义如下：
//interface interface_name {
// }

interface IPerson {
    firstName:string,
    lastName:string,
    sayHi: ()=>string
}

let customer:IPerson = {
    firstName:"Tom",
    lastName:"Hanks",
    sayHi: ():string =>{return "Hi there"}
}

console.log("Customer 对象 ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

let employee:IPerson = {
    firstName:"Jim",
    lastName:"Blakes",
    sayHi: ():string =>{return "Hello!!!"}
}

console.log("Employee  对象 ")
console.log(employee.firstName)
console.log(employee.lastName)

interface myFirstInterface {
    firstNameA:string,
    lastNameA:string,
    sayHelloA: (a:number,b:number)=>number
}
let newFunc:myFirstInterface = {
    firstNameA:"Join",
    lastNameA:"Watson",
    sayHelloA: (a,b):number =>{return a-b}
}

console.log(newFunc.firstNameA)
console.log(newFunc.lastNameA)
console.log(newFunc.sayHelloA(10,5))


interface namelist {
    [index:number]:string
}
let list2:namelist = ["Google","ruNoob","taoBao"]


interface mySecondInterface extends myFirstInterface {
}
let hello:mySecondInterface
hello.firstNameA = "AAA"
hello.lastNameA = "BBB"
hello.sayHelloA(3,3)

console.log(hello.firstNameA)
console.log(hello.lastNameA)
console.log(hello.sayHelloA(3,3))