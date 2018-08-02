# Compilar arquivo typescript manualmente pelo terminal

* Abre o terminal
* Executa o comando **tsc nomedoarquivoparacompilar**
* Ele irá gerar um arquivo **nomedoarquivoparacompilar.js** com tudo compilado 

# Compilar arquivo em typescript automaticamente no Visual Studio Code

## Solução 1
* Abra o terminal do VSC e digite **tsc --init** na pasta do seu projeto para criar o arquivo **tsconfig.json** (se você não tiver um).
* Pressione **Ctrl+Shift+B** para abrir uma lista de tarefas no VS Code
* selecione **tsc: watch - tsconfig.json** ou **tsc: monitorar - tsconfig.json.**
* Feito! Seu projeto é recompilado em cada arquivo salvo.

Você pode ter vários arquivos tsconfig.json em sua área de trabalho e executar várias compilações de uma só vez, se desejar (por exemplo, frontend e backend separadamente).

## Solução 2

* Abra o terminal do VSC
* Digite **tsc nomedoarquivoquevaisercompilado -w**
* Feito! ele irá criar o arquivo com o nome do original, porém compilado em javascript
 
# Typescript

Variável inicializada:

        nome: tipo = valor

Variável sem inicializar:    
**OBS: Lembrar do !**  
                
        nome!: tipo

Variavel privada:
**OBS: Lembrar do _ antes do nome**  

        _nome!: tipo

Get

        get name(): string{
            return this._name
        }

Set

        set name(value: string){
            this._name = value
        }

Interface

        interface INomeinterface{
        }

Interface com atributo opcional

        interface INomeinterface{
                nome?: tipo   *<--- opcional*
                nome: tipo    *<--- obrigatório*
        }

atributos ocionais é bom deixar por último nos parâmetros

Interface com Array

        interface INomeinterface{
                [index: number]: tipodoarray
        }
        let varRecebeInterface: INomeinterface
        varRecebeInterface = ["Keila", "Giba"]

Interface para classes

        interface INomeinterface{
                variavelAleatoria: tipodaVariavel
                nomedoMetodo(): tipodoMetodo 
        }

Interface implementando outras interface

        interface INomeinterface extends ISegunda, ITerceira{
                
        }

For of  
Obtem o valor da variável já

        for(let car of listCar){
                console.log(car)
        }

Module

        module App{
                class Car{      <-- essa classe é interna, não pode ser acessada fora do module
                        name!: string
                        color!: string
                }

                export class Car2{      <-- Essa classe pode ser acessada fora do module
                        name!: string
                        color!: string
                        power!: number
                }
        }

## Soluções  
error TS2531: Object is possibly 'null'.

        document.getElementById("app")!.innerHTML =  `   <--- se o elemento id estiver null, só colocar ! no final da operação
                <div>
                        <ul>
                                <li>${ p.name } - ${ p.description } - $${ p.value } </li>
                        </ul>
                </div>
        `