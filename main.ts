/*
//Tipos
let teste: boolean = true
let id: number = 2

//......................

let decimal: number = 5.3
let hexadecimal: number = 0xf00d
let binário: number = 0b1010
let octal: number = 0o744

//.......................

let nome: string = "Keila"
let carro: string = 'camaro'
let text: string = `<p>Name: ${nome}</p>
                    <p>Car: ${carro}</p>`;

document.body.innerHTML = text

//.......................
//Arrays

let fruits: string[] = ["Apple", "Watermelon", "Lemon"]
console.log(fruits) 

let frutas: Array<string>= ["Apple", "Watermelon", "Lemon"]
console.log(frutas)

//.........................

enum color{ Red = 1, Green, Blue}//Exemplo onde é usado: estado cívil, sexo
console.log(color[2])
console.log(color.Red)

//........................

let list: any = 23
console.log(list)
list = "String..."
console.log(list)

//.......................
//void -> não retorna nada
function printNumber(num:number):void{
    alert(num)
}
printNumber(32)


//........................
// Declaração de variáveis
//........................

let car: string = "Ferrari"

function getCar(value:string):string{
    let car = value
    return car
}

console.log(getCar("Camaro"))
console.log(car)

function testScope(){
    return car
}

console.log(testScope())
//.........................
function testA(){
    let a = 1
    a = 2
    let b = testB()
    a = 3
    return b
    function testB(){
        return a
    }
}
console.log(testA())
//..........................
function f(value: boolean){
    let a = 100
    if(value){
        let b = a + 1
        return b
    }
    //return b   <- da erro por conta do escopo
}

console.log(f(true))

//...........................
function g(condition: boolean, x: number): number{
    if(condition){
        let x = 100
        return x
    }
    return x
}
console.log(g(true, 0))

//.............................
// Trabalhando com classes
//.............................

//public
class Car{
    constructor(
        public name: string, 
        public color: string, 
        public power: number
    ){}

    printCar(): void{
        console.log(`name: ${this.name}, color:${this.color}, power: ${this.power}`)
    }
}

let camaro = new Car("Camaro", "Yellow", 45)
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

//............................
// Interfaces para tipos
//..............................
interface IPeople{
    name: string
    age: number
}

function people(value: IPeople): void{
    console.log(value)
}

people({name:"Keila", age:19})

//retorna a função
function people2(name: string, age: number): IPeople{
    return {name: name, age: age}
}

//deixar um atributo como opcional
interface IColor{
    title?: string
    codeColor: string

}

function getColor(codeColor: string, title?: string): IColor{
    if(title){
        return {title: title, codeColor: codeColor}
    }
    return {codeColor: codeColor}
}

console.log(getColor("#000"))
console.log(getColor("#000", "black"))
*/
//...............................
//Interface para funções Array
//...............................
//--- exemplo 1
interface ITypeFunc{
    (a: number, b: number): boolean
}

let add: ITypeFunc

add = function (carA: number, varB: number): boolean{
    return true
}

//---- Exemplo 2
interface IColor{
    (codeColor: string, title?: string): {codeColor: string, title?: string}
}

let getColor: IColor

getColor = function(codeColor: string, title?: string): {codeColor: string, title?: string}{
    if(title){
        return {codeColor: codeColor, title: title}
    }
    return {codeColor: codeColor}
}

//--- Interfaces para Arrays
interface IArrayTypes{
    [index: number]: string
}

let a: IArrayTypes
a = ["Keila", "Giba"]
console.log(a)