/*
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

class playerCharacter extends character {
    name = "java"
    hp = 1000
    def:0.95
    dmg = 100
    characterType = 0
    getPlayerName(characterType):number {
        if(characterType == 1){
            characterType = super.getCharacterName() +"���"
        }else{
            characterType = super.getCharacterName() +"�ǹ���"
        }
        return characterType
    }
}

class monsterCharacter extends character {
    name = "Alex"
    hp = 1000
    def:0.95
    dmg = 100
    characterType = 1
    getMonsterName(characterType):number {
        if(characterType == 1){
            characterType = super.getCharacterName() +"���"
        }else{
            characterType = super.getCharacterName() +"�ǹ���"
        }
        return characterType
    }
}*/
var Car = /** @class */ (function () {
    // ���캯��
    function Car(engine) {
        this.engine = engine;
    }
    // ����
    Car.prototype.disp = function () {
        console.log("������Ϊ :   " + this.engine);
    };
    return Car;
}());
