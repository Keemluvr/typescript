"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./src/Product");
var App;
(function (App) {
    var p = new Product_1.App2.Product("Book 1", "Code Book", 34.99);
    console.log(p);
    /*
    document.getElementById("app")!.innerHTML = `
    <div>
        <ul>
            <li>${ p.name } - ${ p.description } - $${ p.value }</li>
        </ul>
    </div>
    `;
    */
})(App || (App = {}));
