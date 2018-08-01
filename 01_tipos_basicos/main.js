//Tipos
var teste = true;
var id = 2;
//......................
var decimal = 5.3;
var hexadecimal = 0xf00d;
var binário = 10;
var octal = 484;
//.......................
var nome = "Keila";
var carro = 'camaro';
var text = "<p>Name: " + nome + "</p>\n                    <p>Car: " + carro + "</p>";
document.body.innerHTML = text;
//.......................
//Arrays
var fruits = ["Apple", "Watermelon", "Lemon"];
console.log(fruits);
var frutas = ["Apple", "Watermelon", "Lemon"];
console.log(frutas);
//.........................
var color;
(function (color) {
    color[color["Red"] = 1] = "Red";
    color[color["Green"] = 2] = "Green";
    color[color["Blue"] = 3] = "Blue";
})(color || (color = {})); //Exemplo onde é usado: estado cívil, sexo
console.log(color[2]);
console.log(color.Red);
//........................
var list = 23;
console.log(list);
list = "String...";
console.log(list);
//.......................
//void -> não retorna nada
function printNumber(num) {
    alert(num);
}
printNumber(32);
