# Compilar arquivo typescript manualmente pelo terminal

* Abre o terminal
* Executa o comando **tsc nomedoarquivoparacompilar**
* Ele irá gerar um arquivo **nomedoarquivoparacompilar.js** com tudo compilado 

# Compilar arquivo em typescript automaticamente no Visual Studio Code

* Abra o terminal do VSC e digite **tsc --init** na pasta do seu projeto para criar o arquivo **tsconfig.json** (se você não tiver um).
* Pressione **Ctrl+Shift+B** para abrir uma lista de tarefas no VS Code
* selecione **tsc: watch - tsconfig.json** ou **tsc: monitorar - tsconfig.json.**
* Feito! Seu projeto é recompilado em cada arquivo salvo.
 
Você pode ter vários arquivos tsconfig.json em sua área de trabalho e executar várias compilações de uma só vez, se desejar (por exemplo, frontend e backend separadamente).
