import {App2} from './src/Product' 

module App{
    var p = new App2.Product("Book 1","Code Book",34.99);
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
}