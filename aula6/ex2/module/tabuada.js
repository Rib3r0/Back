/***************************************************************************** 
    objetivo: Arquivo de funções para calcular a tabuada
    data: 13/02/2023
    Autor: Eduardo
    versão: 1.0
******************************************************************************/

const tabuada = function(inicio, fim, multiplicando){
    if(validarNumero(multiplicando) ){
        if(fim - inicio > 50 ){
            console.log("Erro: o numero de resultados deve ser no maximo 50!")
        }else{
            let i = inicio;
            while(i <= fim){
                console.log(`${multiplicando} X ${i} = ${multiplicando * i}`);
                i++;
            }
        }
    }
}

const validarNumero = function(numero){
    if(isNaN(Number(numero))){
        console.log("Erro: Informe somente numeros!");
        return false;
    }
    else if(numero > 100 || numero < 2){
        console.log("Erro: Só são permitidos numeros de 2 a 100!");
        return false;
    }
    else{
        return true;
    }
}

module.exports = {
    tabuada,
    validarNumero
}