var conta = require ('./module/divisor.js');

var readline = require ('readline');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question("Qual o numero Inicial?: \n", function(numero){
    if(isNaN(numero) || numero == ''){
        console.log("Erro: informe um numero valido!")
        entradaDados.close();
    }else{
        let minimo = numero

        entradaDados.question("Qual o numero Final?: \n", function(numero){
            if(isNaN(numero) || numero == ''){
                console.log("Erro: informe um numero valido!")
                entradaDados.close();
            }else{
                let maximo = numero
    
                conta.resultado(minimo,maximo);
                entradaDados.close();
            }

        })
    }

})
