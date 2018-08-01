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
var Car3 = /** @class */ (function () {
    function Car3(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    Car3.prototype.getCar = function () {
        return this.name;
    };
    Car3.prototype.getColor = function () {
        return this.color;
    };
    Car3.prototype.getPower = function () {
        return this.power;
    };
    return Car3;
}());
var camaro2 = new Car3("Camar2o", "Red", 45);
console.log(camaro2.getCar(), camaro2.getCar(), camaro2.getPower());
