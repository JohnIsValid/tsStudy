//number(数字型)
//双精度 64 位浮点值。它可以用来表示整数和分数。
var myFirstNumber1;
var myFirstNumber2 = 30;
var myFirstNumber3 = 30 * 2;
console.log(myFirstNumber1, myFirstNumber2, myFirstNumber3);
//string(字符串型)
//一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。
var myFirstString1;
var myFirstString2 = "Please Print String ";
var myFirstString3 = " Result:".concat(myFirstString2).concat(myFirstString2 + 1, " ");
console.log(myFirstString1, myFirstString2, myFirstString3);
//boolean(布尔型)
//表示逻辑值：true 和 false。
var myFirstBoolean1;
var myFirstBoolean2 = true;
var myFirstBoolean3 = false;
console.log(myFirstBoolean1, myFirstBoolean2, myFirstBoolean3);
//数组
//在元素类型后面加上[]，或者使用数组泛型。
var arr1 = [111, 222];
var arr2 = [111, 222];
console.log(arr2[0]); // 输出index为0的信息 在这里是 111
console.log(arr2[1]); // 输出index为1的信息 在这里是 222
//元组
//元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
var myFirstTuple = ['Print', 1];
console.log(myFirstTuple[0]); // 输出index为0的信息 在这里是 Print
console.log(myFirstTuple[1]); // 输出index为1的信息 在这里是 1
//enum（枚举）
//枚举类型用于定义数值集合。
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
var myFirstEnum1 = color.Red;
var myFirstEnum2 = color.Green;
var myFirstEnum3 = color.Blue;
var myFirstEnum4 = 0;
var myFirstEnum5 = 1;
var myFirstEnum6 = 2;
console.log(myFirstEnum1); // 输出 0
console.log(myFirstEnum2); // 输出 1
console.log(myFirstEnum3); // 输出 2
console.log(myFirstEnum4); // 输出 0
console.log(myFirstEnum5); // 输出 1
console.log(myFirstEnum6); // 输出 2
//void(无返回值)
//用于标识方法返回值的类型，表示该方法没有返回值。
function hello() {
    alert("print string");
}
console.log(hello);
//null
//表示对象值缺失。
//undefined
//用于初始化变量为一个未定义的值。
//never
//never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
