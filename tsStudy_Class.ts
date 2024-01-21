
enum characterTypeEnum {
    player,
    monster,
}

class character {
    // character default value
    name:string
    hp:number
    def:number
    dmg:number
    characterType:characterTypeEnum
    printCharacterName():void {
        console.log(this.name,this.characterType)
        return
    }

    //constructor
    constructor() {
    }

    //function
    reduceHp(receiveDmg:number):number {
        return this.hp - receiveDmg * this.def
    }

    addHp(addHpValue:number):number {
        return this.hp + addHpValue
    }
    getCharacterName():string {
        return this.name
    }
}



//类的继承
class playerCharacter extends character {
    name = "java"
    hp = 1000
    def:0.95
    dmg = 100
    characterType = 0
    printCharacterName():void {
        super.getCharacterName()
        console.log("玩家",this.name.length)
    }
}



//继承类的方法重写
class monsterCharacter extends character {
    name = "Alex"
    hp = 1000
    def:0.95
    dmg = 100
    characterType = 1
    printCharacterName():void {
        super.getCharacterName()
        console.log("怪物",this.name.length)
    }
}



//static 关键字
// static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
class StaticMem {
    static num:number;

    static disp():void {
        console.log("num 值为 "+ StaticMem.num)
    }
}
StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法

//instanceof 运算符
// instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
class Person{ }
let obj = new Person()
let isPerson = obj instanceof Person;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);



//访问控制修饰符
// TypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限。
// public（默认） : 公有，可以在任何地方被访问。
// protected : 受保护，可以被其自身以及其子类访问。
// private : 私有，只能被其定义所在的类访问。

class Encapsulate {
    public str1:string = "AAA"
    protected str2:string = "BBB"
    private str3:string = "CCC"
    static funcE():void{
        console.log(obj1.str2)// 可访问
    }
}

let obj1 = new Encapsulate()
console.log(obj1.str1)     // 可访问
Encapsulate.funcE()        // 可访问,因为调用了函数，但不涉及访问
//console.log(obj1.str2)   // 编译错误， str2 只能自身访问
//console.log(obj1.str3)   // 编译错误， str2 是私有的



//类和接口
// 类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。
// 以下实例中 agrLoan 类实现了 iLoan 接口：

interface iLoan {
    interest:number
    exc:number
}

class agrLoan implements iLoan {
    interest:number
    exc:number
    rebate:number

    constructor(interest:number,rebate:number) {
        this.interest = interest
        this.rebate = rebate
    }
}

let objX = new agrLoan(10,1)
console.log("利润为 : "+objX.interest+"，抽成为 : "+objX.rebate )