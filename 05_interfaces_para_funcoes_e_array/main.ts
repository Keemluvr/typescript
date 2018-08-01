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

let getColor2: IColor

getColor2 = function(codeColor: string, title?: string): {codeColor: string, title?: string}{
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