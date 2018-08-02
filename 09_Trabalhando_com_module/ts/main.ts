module App{
    export interface ICar{
        name: string
    }
    
}

module App{
    class Car implements ICar{
        name!: string
        color!: string
    }
    let mustang = new Car()

    console.log(mustang)
}


