//if 语句 - 只有当指定条件为 true 时，使用该语句来执行代码
//if...else 语句 - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
//if...else if....else 语句- 使用该语句来选择多个代码块之一来执行
//switch 语句 - 使用该语句来选择多个代码块之一来执行
var judgeNumber;
//if
judgeNumber = 5;
if (judgeNumber > 0) {
    console.log("数字是正数");
}
//if...else
judgeNumber = 13;
if (judgeNumber % 2 == 0) {
    console.log("偶数");
}
else {
    console.log("奇数");
}
//if...else if....else
judgeNumber = 2;
if (judgeNumber > 0) {
    console.log(judgeNumber + " 是正数");
}
else if (judgeNumber < 0) {
    console.log(judgeNumber + " 是负数");
}
else {
    console.log(judgeNumber + " 不是正数也不是负数");
}
//switch...case
var eventType;
(function (eventType) {
    eventType[eventType["customEvent"] = 0] = "customEvent";
    eventType[eventType["BattleEvent"] = 1] = "BattleEvent";
    eventType[eventType["AddItemEvent"] = 2] = "AddItemEvent";
    eventType[eventType["reduceItemEvent"] = 3] = "reduceItemEvent";
})(eventType || (eventType = {}));
var needPlayEvent;
needPlayEvent = 0;
var grade = "A";
switch (grade) {
    case "A": {
        console.log("优");
        break;
    }
    case "B": {
        console.log("良");
        break;
    }
    case "C": {
        console.log("及格");
        break;
    }
    case "D": {
        console.log("不及格");
        break;
    }
    default: {
        console.log("非法输入");
        break;
    }
}
