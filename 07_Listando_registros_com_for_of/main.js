//................................
// Listando registros com for of
//................................
var listCar = ["Camaro", "Ferrari", "Porsche"];
//antes
for (var i in listCar) {
    console.log(i);
}
//agora
for (var _i = 0, listCar_1 = listCar; _i < listCar_1.length; _i++) {
    var car = listCar_1[_i];
    console.log(car);
}
var colors = new Array(["red", "blue", "orange"]);
//colors['title'] = "Colors"
console.log(colors);
//antes
for (var i in colors) {
    console.log(i);
}
//agora
for (var _a = 0, colors_1 = colors; _a < colors_1.length; _a++) {
    var color = colors_1[_a];
    console.log(color);
}
