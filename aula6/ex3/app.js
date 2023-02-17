var conta = require ('./module/divisor.js');

var readline = require ('readline');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question("Qual o numero Minimo?:[0 a 500] \n", function(numero){
    if(isNaN(Number(numero)) || numero.trim() == ''){
        console.log("Erro: informe um numero valido!")
        entradaDados.close();
    }else{
        let minimo = Number(numero)

        entradaDados.question("Qual o numero Maximo?:[100 a 1000] \n", function(numero){
            if(isNaN(Number(numero)) || numero.trim() == ''){
                console.log("Erro: informe um numero valido!")
                entradaDados.close();
            }else{
                let maximo = Number(numero)
    

                entradaDados.question("Qual o formato?:[pares,impares,todos] \n", function(formato){

                    conta.resultado(minimo,maximo,formato.toLowerCase());
                    entradaDados.close();
                })

            }

        })
    }

})
