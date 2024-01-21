
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



//��ļ̳�
class playerCharacter extends character {
    name = "java"
    hp = 1000
    def:0.95
    dmg = 100
    characterType = 0
    printCharacterName():void {
        super.getCharacterName()
        console.log("���",this.name.length)
    }
}



//�̳���ķ�����д
class monsterCharacter extends character {
    name = "Alex"
    hp = 1000
    def:0.95
    dmg = 100
    characterType = 1
    printCharacterName():void {
        super.getCharacterName()
        console.log("����",this.name.length)
    }
}



//static �ؼ���
// static �ؼ������ڶ���������ݳ�Ա�����Ժͷ�����Ϊ��̬�ģ���̬��Ա����ֱ��ͨ���������á�
class StaticMem {
    static num:number;

    static disp():void {
        console.log("num ֵΪ "+ StaticMem.num)
    }
}
StaticMem.num = 12     // ��ʼ����̬����
StaticMem.disp()       // ���þ�̬����

//instanceof �����
// instanceof ����������ж϶����Ƿ���ָ�������ͣ�����Ƿ��� true�����򷵻� false��
class Person{ }
let obj = new Person()
let isPerson = obj instanceof Person;
console.log("obj ������ Person ��ʵ���������� " + isPerson);



//���ʿ������η�
// TypeScript �У�����ʹ�÷��ʿ��Ʒ����������ࡢ�����������͹��췽���ķ��ʡ�TypeScript ֧�� 3 �ֲ�ͬ�ķ���Ȩ�ޡ�
// public��Ĭ�ϣ� : ���У��������κεط������ʡ�
// protected : �ܱ��������Ա��������Լ���������ʡ�
// private : ˽�У�ֻ�ܱ��䶨�����ڵ�����ʡ�

class Encapsulate {
    public str1:string = "AAA"
    protected str2:string = "BBB"
    private str3:string = "CCC"
    static funcE():void{
        console.log(obj1.str2)// �ɷ���
    }
}

let obj1 = new Encapsulate()
console.log(obj1.str1)     // �ɷ���
Encapsulate.funcE()        // �ɷ���,��Ϊ�����˺����������漰����
//console.log(obj1.str2)   // ������� str2 ֻ���������
//console.log(obj1.str3)   // ������� str2 ��˽�е�



//��ͽӿ�
// �����ʵ�ֽӿڣ�ʹ�ùؼ��� implements������ interest �ֶ���Ϊ�������ʹ�á�
// ����ʵ���� agrLoan ��ʵ���� iLoan �ӿڣ�

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
console.log("����Ϊ : "+objX.interest+"�����Ϊ : "+objX.rebate )