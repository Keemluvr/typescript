//............................
// Interfaces para classes
//...........................
interface ICountString{
    valueTxt: string
    countTxt(): number 
}

interface IPrintTxt{
    print(value: string): void
}

class MyText implements ICountString, IPrintTxt{

    constructor(public valueTxt: string){
    }

    countTxt(): number{
        return this.valueTxt.length
    }

    print(value: string): void{
        console.log("Text: " + value)
    }
}

let t = new MyText("keila")
console.log(t.countTxt())
t.print("test")

//--- Interface implementando outra interface

interface ICarString{
    name: string
    getCar(): string
}

interface ICarColor{
    color: string
    getColor(): string
}

interface ICar2 extends ICarString, ICarColor{
    power: number
    getPower(): number
}

class Car3 implements ICar2{
    constructor(public name: string, public color: string, public power: number){
    }

    getCar(): string{
        return this.name
    }

    getColor(): string{
        return this.color
    }

    getPower(): number{
        return this.power
    }
}

let camaro2 = new Car3("Camar2o", "Red", 45)
console.log(camaro2.getCar(), camaro2.getCar(), camaro2.getPower())