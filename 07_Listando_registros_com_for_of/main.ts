//................................
// Listando registros com for of
//................................

let listCar = ["Camaro", "Ferrari", "Porsche"]

//antes
for(let i in listCar){
    console.log(i)
}

//agora
for(let car of listCar){
    console.log(car)
}

let colors = new Array(["red", "blue", "orange"])

//colors['title'] = "Colors"
console.log(colors)

//antes
for(let i in colors){
    console.log(i)
}

//agora
for(let color of colors){
    console.log(color)
}