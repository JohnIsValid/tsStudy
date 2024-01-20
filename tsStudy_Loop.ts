//for 循环
//for 循环用于多次执行一个语句序列，简化管理循环变量的代码
let num:number = 5;
let i:number;
let factorialFor = 1;

for(i = num;i>=1;i--) {
    factorialFor *= i;
}
console.log(factorialFor)



//for...in 循环
//for...in 语句用于一组值的集合或列表进行迭代输出
//in左侧的值需要为 string 或 any 类型
let j:any;
let n:any = "hello guys"

for(j in n) {
    console.log(n[j])
}



//for...of
//
let someTuple = [1, "string", false];   //someTuple是一个元组，

for (let entry of someTuple) {
    console.log(entry); //  1, "string", false
}



//forEach
//
let listA = [1, 2, 3];
listA.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val,idx,array)
});




//every
//
let listB = [4, 5, 6];
listB.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val,idx,array)
    return true; // Continues
    // Return false will quit the iteration
});



//while
//while 循环的关键点是循环可能一次都不会执行。当条件为 false 时，会跳过循环主体，直接执行紧接着 while 循环的下一条语句。
let numWhile:number = 5;
let factorialWhile:number = 1;

while(numWhile >=1) {
    factorialWhile = factorialWhile * num;
    num--;
}
console.log("5 的阶乘为："+factorialWhile);



//do...while
//不像 for 和 while 循环，它们是在循环头部测试循环条件。do...while 循环是在循环的尾部检查它的条件

let numDoWhile:number = 10;
do {
    console.log(numDoWhile);
    numDoWhile--;
} while(numDoWhile>=0);



//break
//break 语句有以下两种用法：
// 1.当 break 语句出现在一个循环内时，循环会立即终止，且程序流将继续执行紧接着循环的下一条语句。
// 2.它可用于终止 switch 语句中的一个 case。
// 如果使用的是嵌套循环（即一个循环内嵌套另一个循环），break 语句会停止执行最内层的循环，然后开始执行该块之后的下一行代码。
let numBreak:number = 1
while(numBreak<=10) {
    if (numBreak % 5 == 0) {
        console.log ("在 1~10 之间第一个被 5 整除的数为 : "+numBreak)
        break     // 找到一个后退出循环
    }
    numBreak++
}  // 输出 5 然后程序执行结束



//continue
//continue 语句有点像 break 语句。但它不是强制终止，continue 会跳过当前循环中的代码，强迫开始下一次循环。
// 对于 for 循环，continue 语句执行后自增语句仍然会执行。对于 while 和 do...while 循环，continue 语句重新执行条件判断语句

let numContinue:number = 0
let countContinue:number = 0

for(numContinue=0;numContinue<=20;numContinue++) {
    if (numContinue % 2==0) {
        continue
    }
    countContinue++
}
console.log ("0 ~20 之间的奇数个数为: "+countContinue)    //输出10个偶数