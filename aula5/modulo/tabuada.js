/***************************************************************************** 
    objetivo: Arquivo de funções para calcular a tabuada de um número até um contador qualquer
    data: 06/02/2023
    Autor: Eduardo
    versão: 1.0
******************************************************************************/

//calcula uma tabuada
const tabuada = function(multiplicando, maxMultiplicador){

    let tabuada = Number(multiplicando);
    let contador = Number(maxMultiplicador);
    let status = true;

    if(tabuada == 0 || contador == 0){
        console.log('Erro')
        status = false;
    }
    else if (isNaN(tabuada) || isNaN(contador)){
        console.log('Erro')
        status = false
    }
    else{
        //2X0=0
        i=0
        while(i <= contador){
            console.log(tabuada + 'X' + i + '=' + tabuada * i);
            console.log(`${tabuada}  X  ${i}  =  ${tabuada * i}`);
            i++;
        }
    }

    return status;
    

}

module.exports = {
    tabuada
}