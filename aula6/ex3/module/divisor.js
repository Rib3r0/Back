/***************************************************************************** 
    objetivo: Arquivo de funções para dividir numeros pares de impares
    data: 10/02/2023
    Autor: Eduardo
    versão: 1.0
******************************************************************************/

const { validarNumero } = require("../../ex2/module/tabuada")

const resultado = function(minimo, maximo){
    let i = minimo
    let n = maximo

    let impares = []
    let pares = []

    

    if(i > n){
        console.log("Erro: o minimo deve ser menor que o maximo!")
    }else if(validarNumeroMinimo(i) && validarNumeroMaximo(n)){
        while(i <= n){
            a = (i % 2 == 0) ? 'par' : 'inpar' ;
            if( a == 'par' ){
                pares.push(i);
            }else{
                impares.push(i);
            }
            i++
    
        }
        console.log('PARES:')
        for( i in pares){
            console.log(pares[i])
            
        }
        console.log("Qtde de números encontrados:" + pares.length)
        console.log('IMPARES:')
        for(i in impares){
            console.log(impares[i])
            
        }
        console.log("Qtde de números encontrados:" + impares.length)
    }else{

    }

}
const validarNumeroMinimo = function(numero){
    if(numero >= 0 && numero <= 500){
        return true
    }else{
        console.log("Erro: o valor maximo deve ser entre 0 a 500")
        return false
    }
}
const validarNumeroMaximo = function(numero){
    if(numero >= 100 && numero <= 1000){
        return true
    }else{
        console.log("Erro: o valor maximo deve ser entre 100 a 1000")
        return false
    }
}



module.exports = {
    resultado
}