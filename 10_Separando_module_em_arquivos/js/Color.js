"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorModule;
(function (ColorModule) {
    var Color = /** @class */ (function () {
        function Color() {
        }
        Color.prototype.getColor = function () {
            return this.code;
        };
        return Color;
    }());
    ColorModule.Color = Color;
})(ColorModule = exports.ColorModule || (exports.ColorModule = {}));
