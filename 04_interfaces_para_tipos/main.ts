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