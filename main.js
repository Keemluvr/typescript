"use strict";
var MyText = /** @class */ (function () {
    function MyText(valueTxt) {
        this.valueTxt = valueTxt;
    }
    MyText.prototype.countTxt = function () {
        return this.valueTxt.length;
    };
    MyText.prototype.print = function (value) {
        console.log("Text: " + value);
    };
    return MyText;
}());
var t = new MyText("keila");
console.log(t.countTxt());
t.print("test");
var Car = /** @class */ (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    Car.prototype.getCar = function () {
        return this.name;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.getPower = function () {
        return this.power;
    };
    return Car;
}());
var camaro = new Car("Camaro", "Red", 45);
console.log(camaro.getCar(), camaro.getColor(), camaro.getPower());
