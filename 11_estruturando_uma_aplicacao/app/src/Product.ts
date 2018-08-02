import {App} from './IProduct'

export module App2{
    export class Product implements App.IProduct{
        constructor(
            public name: string,
            public description: string,
            public value: number
        ){};

    }
}