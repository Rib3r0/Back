/***************************************************************************** 
    objetivo: fazer uma calculadora funcional
    data: 30/01/2023
    Autor: Eduardo
    versão: 1.0
******************************************************************************/

// importe da biblioteca
var readline = require ('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('***CALCULADORA***');
//função de callback
entradaDados.question('Qual é o tipo de operação?(informe o numero):\n 1.Soma\n 2.subtração\n 3.multiplicação\n 4.divisão \n',function(valorDaOperação){
    let formula = parseFloat(valorDaOperação);
    if(formula != 4 && formula != 1 && formula != 2 && formula != 3){
        console.log('ERRO: Informe um valor valido!');
    }else{

        entradaDados.question('Informe o primeiro valor: \n', function(primeiroValor){
            if(isNaN(parseFloat(primeiroValor))){
                console.log('ERRO: Informe um numero valido!')
            }else{
                let valor1 = parseFloat(primeiroValor.replace(',','.'));

                entradaDados.question('Informe o segundo valor: \n', function(segundoValor){

                    if(isNaN(parseFloat(segundoValor))){
                        console.log('ERRO: Informe um numero valido!')
                    }else{
                        let valor2 = parseFloat(segundoValor.replace(',','.'));                          
                
                    if(formula == 1){
                        let resultado = valor1 + valor2;
                        console.log('resultado: ' + resultado);
                    }
                    if(formula == 2){
                        let resultado = valor1 - valor2;
                        console.log('resultado: ' + resultado);
                    }
                    if(formula == 3){
                        let resultado = valor1 * valor2;
                        console.log('resultado: ' + resultado);
                    }
                    if(formula == 4){
                        if(valor2 == 0){
                            console.log('ERRO: Não existe divisão por 0')
                        }else{
                            let resultado = valor1 / valor2;
                            console.log('resultado: ' + resultado);
                        }

                    }
                    }
    
                })
            }           

        })
    }

})