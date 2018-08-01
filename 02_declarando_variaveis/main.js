//........................
// Declaração de variáveis
//........................
var car = "Ferrari";
function getCar(value) {
    var car = value;
    return car;
}
console.log(getCar("Camaro"));
console.log(car);
function testScope() {
    return car;
}
console.log(testScope());
//.........................
function testA() {
    var a = 1;
    a = 2;
    var b = testB();
    a = 3;
    return b;
    function testB() {
        return a;
    }
}
console.log(testA());
//..........................
function f(value) {
    var a = 100;
    if (value) {
        var b = a + 1;
        return b;
    }
    //return b   <- da erro por conta do escopo
}
console.log(f(true));
//...........................
function g(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(g(true, 0));
