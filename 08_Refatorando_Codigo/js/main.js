"use strict";
/// <reference path="ICar" />
var Car = /** @class */ (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    Car.prototype.getCar = function () {
        console.log(this.name, this.color, this.power);
    };
    return Car;
}());
var porsche = new Car("Porsche", "Red", 45);
porsche.getCar();
