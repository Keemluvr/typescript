/// <reference path="Color.ts" />

module ColorModule{
    let red = new Color()
    red.name = "red"
    red.code = "#FF0000"
    console.log(red.getColor())
}

let blue = new ColorModule.Color()
blue.name = "Blue"
blue.code = "blue"
console.log(blue)