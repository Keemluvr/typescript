"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("./Color");
var ColorModule2;
(function (ColorModule2) {
    var red = new Color_1.ColorModule.Color();
    red.name = "red";
    red.code = "#FF0000";
    console.log(red.getColor());
})(ColorModule2 || (ColorModule2 = {}));
var blue = new Color_1.ColorModule.Color();
blue.name = "Blue";
blue.code = "blue";
console.log(blue);
