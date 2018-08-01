//.............................
// Trabalhando com classes
//.............................
//public
var Car1 = /** @class */ (function () {
    function Car1(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    Car1.prototype.printCar = function () {
        console.log("name: " + this.name + ", color:" + this.color + ", power: " + this.power);
    };
    return Car1;
}());
var camaro = new Car1("Camaro", "Yellow", 45);
camaro.printCar();
//..............................
// private
var Car2 = /** @class */ (function () {
    function Car2(name, color, power) {
        this._name = name;
        this._color = color;
        this._power = power;
        Car2.list.push(name);
    }
    Object.defineProperty(Car2.prototype, "name", {
        //get
        get: function () {
            return this._name;
        },
        //set
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Car2.list = [];
    return Car2;
}());
var ferrari = new Car2("Ferrari", "red", 50);
console.log(ferrari);
console.log(Car2.list);
var Camaro2 = new Car2("Camaro2", "Red", 56);
console.log(Car2.list);
ferrari.name = "Ferrari2";
console.log(ferrari.name);
