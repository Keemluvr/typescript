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