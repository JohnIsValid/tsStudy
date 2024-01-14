class myFirstClass {          //定义一个叫 site 的对象
    print():void {                  //这个对象里有一个叫print的函数
        console.log("printLog")     //这个叫print的函数的执行行为是播放内容为“printLog”的log
    }
}
let myFirstObject = new myFirstClass();     //根据myFirstClass这个类型创建一个叫myFirstObject的对象
myFirstObject.print();                      //使myFirstObject执行一次print这个方法