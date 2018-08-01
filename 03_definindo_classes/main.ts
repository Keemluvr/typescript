//.............................
// Trabalhando com classes
//.............................

//public
class Car1{
    constructor(
        public name: string, 
        public color: string, 
        public power: number
    ){}

    printCar(): void{
        console.log(`name: ${this.name}, color:${this.color}, power: ${this.power}`)
    }
}

let camaro = new Car1("Camaro", "Yellow", 45)
camaro.printCar()

//..............................
// private
class Car2{
    private _name!: string
    private _color!: string
    private _power!: number
    public static list: Array<string> = []

    constructor(name: string, color: string, power: number){
        this._name = name
        this._color = color
        this._power = power
        Car2.list.push(name)
    }

    //get
    get name(): string{
        return this._name
    }

    //set
    set name(value: string){
        this._name = value
    }
}

let ferrari = new Car2("Ferrari", "red", 50)
console.log(ferrari)
console.log(Car2.list)

let Camaro2 = new Car2("Camaro2", "Red", 56)
console.log(Car2.list)
ferrari.name = "Ferrari2"
console.log(ferrari.name)