//for 循环
//for 循环用于多次执行一个语句序列，简化管理循环变量的代码
let num:number = 5;
let i:number;
let factorial = 1;

for(i = num;i>=1;i--) {
    factorial *= i;
}
console.log(factorial)



//for...in 循环
//for...in 语句用于一组值的集合或列表进行迭代输出
//in左侧的值需要为 string 或 any 类型
let j:any;
let n:any = "hello guys"

for(j in n) {
    console.log(n[j])
}