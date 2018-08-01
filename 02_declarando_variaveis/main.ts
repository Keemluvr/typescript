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