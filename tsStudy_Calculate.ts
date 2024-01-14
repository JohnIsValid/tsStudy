//算术运算符(数值或变量之间的计算符)

// +    (加)
console.log("7 + 2 = ",7 + 2)
// -    (减)
console.log("7 - 2 = ",7 - 2)
// *    (乘)
console.log("7 * 2 = ",7 * 2)
// /    (除)
console.log("7 / 2 = ",7 / 2)
// %    (取模：余数)
console.log("7 % 2 = ",7 % 2)

let testNumber;

// ++   (自增)
testNumber = 7
console.log("10++ = ",testNumber++)//这种方式会打印出testNumber之前的数值，一定要先计算，然后再打印；
testNumber = 7
testNumber++
console.log("10++ = ",testNumber)
// --   (自减)
testNumber = 7
console.log("10-- = ",testNumber--)//这种方式会打印出testNumber之前的数值，一定要先计算，然后再打印；
testNumber = 7
testNumber--
console.log("10-- = ",testNumber)



//关系运算符(关系运算符用于计算结果是否为 true 或者 false)
// == (等于)
// != (不等于)
// >  (大于)
// <  (小于)
// >= (大于或等于)
// <= (小于或等于)

let num1:number = 5;
let num2:number = 9;

console.log("num1 的值为: "+num1);
console.log("num2 的值为:"+num2);

let res = num1>num2
console.log("num1 大于n num2: "+res)

res = num1<num2
console.log("num1 小于 num2: "+res)

res = num1>=num2
console.log("num1 大于或等于  num2: "+res)

res = num1<=num2
console.log("num1 小于或等于 num2: "+res)

res = num1==num2
console.log("num1 等于 num2: "+res)

res = num1!=num2
console.log("num1 不等于 num2: "+res)



//逻辑运算符(逻辑运算符用于测定变量或值之间的逻辑)
// && (与)
// || (或)
//  ! (非)

let avg = 20;
let percentage = 90;
console.log("avg 值为: " + avg + " ,percentage 值为: " + percentage);

let res1 = ((avg > 50) && (percentage > 80));
console.log("(avg>50)&&(percentage>80): ", res1);

let res2 = ((avg > 50) || (percentage > 80));
console.log("(avg>50)||(percentage>80): ", res2);

let res3 = !((avg > 50) && (percentage > 80));
console.log("!((avg>50)&&(percentage>80)): ", res3);



//位运算符(位操作是程序设计中对位模式按位或二进制数的一元和二元操作)
// &   (与)         按位与处理两个长度相同的二进制数，两个相应的二进位都为 1，该位的结果值才为 1，否则为 0。
// |   (或)         按位或处理两个长度相同的二进制数，两个相应的二进位中只要有一个为 1，该位的结果值为 1。
// ~   (取反)       取反是一元运算符，对一个二进制数的每一位执行逻辑反操作。使数字 1 成为 0，0 成为 1。
// ^   (异或)       按位异或运算，对等长二进制模式按位或二进制数的每一位执行逻辑异按位或操作。操作的结果是如果某位不同则该位为 1，否则该位为 0
// <<  (左移)       把 << 左边的运算数的各二进位全部左移若干位，由 << 右边的数指定移动的位数，高位丢弃，低位补 0。
// >>  (右移)       把 >> 左边的运算数的各二进位全部右移若干位，>> 右边的数指定移动的位数。
// >>> (无符号右移)  无符号右移，与有符号右移位类似，除了左边一律使用0 补位。

let a:number = 2;   // 二进制 10
let b:number = 3;   // 二进制 11

let result;

result = (a & b);
console.log("(a & b) => ",result)

result = (a | b);
console.log("(a | b) => ",result)

result = (a ^ b);
console.log("(a ^ b) => ",result);

result = (~b);
console.log("(~b) => ",result);

result = (a << b);
console.log("(a << b) => ",result);

result = (a >> b);
console.log("(a >> b) => ",result);

result = (a >>> 1);
console.log("(a >>> 1) => ",result);



//赋值运算符
// +  (赋值)
// += (先进行加运算后赋值)
// -= (先进行减运算后赋值）
// *= (先进行乘运算后赋值)
// /= (先进行除运算后赋值)
let Aa: number = 12
let Bb:number = 10

Aa = Bb
console.log("Aa = Bb: "+Aa)

Aa += Bb
console.log("Aa+=Bb: "+Aa)

Aa -= Bb
console.log("Aa-=Bb: "+Aa)

Aa *= Bb
console.log("Aa*=Bb: "+Aa)

Aa /= Bb
console.log("Aa/=Bb: "+Aa)

Aa %= Bb
console.log("Aa%=Bb: "+Aa)



//三元运算符
//三元运算有 3 个操作数，并且需要判断布尔表达式的值。该运算符的主要是决定哪个值应该赋值给变量。
let num:number = -2
//实例中用于判断变量是否大于 0。
let resultX = num > 0 ? "大于 0" : "小于 0，或等于 0"
console.log(resultX)



//负号运算符(-)
//更改操作数的符号
let x = 4;
let y = -x;
console.log("x 值为: ", x); // 输出结果 4
console.log("y 值为: ", y); // 输出结果 -4



//字符串运算符: 连接运算符 (+)
//+运算符可以拼接两个字符串
let msg = "Run" + " noob" + " please";
console.log(msg);