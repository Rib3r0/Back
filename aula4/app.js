/***************************************************************************** 
    objetivo: Ralizar calculos mateméticos (Soma, Subtração, Multiplicação e Divisão)
    data: 03/02/2023
    Autor: Eduardo
    versão: 1.0
******************************************************************************/

//Importe da biblioteca calculadora (criada por nós)
var matematica = require ('./modulo/calculadora.js');

//Importe da biblioteca para a entrada de dados
var readline = require ('readline');


//Criar um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada de dados do valor 1
entradaDados.question('Valor1: \n', function(numero1){

    let valor1 = numero1.replace(',','.');

    //Entrada da dados do valor 2
    entradaDados.question('Valor2: \n', function(numero2){

        let valor2 = numero2.replace(',','.');

        //Entrada de dados Tipo de calculo
        entradaDados.question('Ecolha uma operação: [ SOMAR | SUBTRAIR | DIVIDIR | MULTIPLICAR ]: \n', function(tipoCalculo){

            //toUpperCase
            //toLowerCase
            let operacao = tipoCalculo.toLowerCase();
            let resultado;
            //validação de entrada dados vazio
            if(valor1 == '' || valor2 == '' || operacao == ''){
                console.log('Erro: Não é possível calcular sem preencher todos os dados.');
                entradaDados.close();
            }else if (isNaN(valor1) || isNaN(valor2)){
                console.log('Erro: Não é possivel calcular sem a entrada de valores numericos.');
                entradaDados.close();
            }else{

                //Chama aa função para calcular, encaminhando os dados para o calculo
                resultado = matematica.calcular(valor1,valor2,operacao);

                //validação para tratar a variavel resultado quando nenhum calculo é realizado
                if(resultado != undefined)
                //Valida se o retorno da função é verdadeiro ou falso (se for falso, encerra o programa)
                if (resultado == false && typeof(resultado) == 'boolean')
                    entradaDados.close();
                else
                console.log(resultado);
                entradaDados.close();
            }

        })
    })

});
