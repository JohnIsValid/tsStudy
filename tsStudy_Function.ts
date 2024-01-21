//无返回值的参数
function myFirstTypeScriptFunction():void {
    console.log("调用函数")
    return
}
myFirstTypeScriptFunction()



//函数返回值的应用
function mySecondTypeScriptFunction():string {
    return"return a string"
}
function callFunctionTest(){
    let functionString:string = mySecondTypeScriptFunction()
    console.log(functionString)
}
callFunctionTest()



//带参数函数
//在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 ？。
function addFunction(x: number, y: number): number {
    return x + y;
}
console.log(addFunction(3,22))



//可选参数和默认参数
function buildNameX(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildNameX("Bob");  // 正确
let result3 = buildNameX("Bob", "Adams");  // 正确
//let result2 = buildNameX("Bob", "Adams", "Sr.");  // 错误，参数太多了



//默认参数
//我们也可以设置参数的默认值，这样在调用函数的时候，如果不传入该参数的值，则使用默认参数
function calculate_discount(price:number,rate:number = 0.50) {
    let discount = price * rate;
    console.log("计算结果: ",discount);
}
calculate_discount(1000)
calculate_discount(1000,0.30)



//剩余参数
//有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。
// 剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" XXX ");
}
//函数的最后一个命名参数 restOfName 以 ... 为前缀，它将成为一个由剩余参数组成的数组，索引值从0（包括）到 restOfName.length（不包括）
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName)

function addNumbers(...nums:number[]) {
    let i;
    let sum:number = 0;

    for(i = 0;i<nums.length;i++) {
        sum = sum + nums[i];
    }
    console.log("和为：",sum)
}
addNumbers(1,2,3)
addNumbers(10,10,10,10,10)




//匿名函數
let msg = function() {
    return "hello world";
}
console.log(msg());



//匿名函数自调用
(function () {
    let x = "Hello!!";
    console.log(x)
})()



//构造函数
//很像虚幻里的数学表达式
let myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);
console.log(x);

let myConF = new Function ("x","y","z","return x / y * z")
let myConFC = myConF(100,2,50)
console.log(myConFC)



//递归函数
//递归函数即在函数内调用函数本身
function diGuiFunction(number) {
    if (number <= 0) {         // 停止执行
        return 1;
    } else {
        return (number * diGuiFunction(number - 1));     // 调用自身
    }
};
console.log(diGuiFunction(6));      // 输出 720



//Lambda 函数
//Lambda 函数也称之为箭头函数。
// 箭头函数表达式的语法比函数表达式更短。
let arrowFunction = (x:number)=>10 + x      //输入参数为x, return 10+x;
console.log(arrowFunction(100))      //输出结果为 110
//我们可以不指定函数的参数类型，通过函数内来推断参数类型
let arrowFunctionSecond = (x) => {
    if(typeof x == "number"){
        console.log((x + "是一个数字"))
    }
    else if (typeof x == "string"){
        console.log((x + "是一组字符串"))
    }
    else if (typeof x == "boolean") {
        console.log((x + "是一个布尔型"))
    }
}
arrowFunctionSecond(12);
arrowFunctionSecond("hello");
arrowFunctionSecond(false);



//函数重载
function disP(s1:string):void;
function disP(n1:number,s1:string):void;
function disP(x:any,y?:any):void {
    console.log(x);
    console.log(y);
}
disP("abc")
disP(1,"xyz");