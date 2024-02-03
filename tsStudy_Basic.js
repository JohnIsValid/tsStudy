var myFirstClass = /** @class */ (function () {
    function myFirstClass() {
    }
    myFirstClass.prototype.print = function () {
        console.log("printLog"); //这个叫print的函数的执行行为是播放内容为“printLog”的log
    };
    return myFirstClass;
}());
var myFirstObject = new myFirstClass(); //根据myFirstClass这个类型创建一个叫myFirstObject的对象
myFirstObject.print(); //使myFirstObject执行一次print这个方法
