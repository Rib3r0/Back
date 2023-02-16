/***************************************************************************** 
    objetivo: Arquivo de funções para calcular a média dos alunos
    data: 10/02/2023
    Autor: Eduardo
    versão: 1.0
******************************************************************************/

const { isString } = require("util");

const media = function(media){

    let numeros = media;
    let soma = 0;
    for(let n = 0; n < numeros.length; n++ ){
        soma = Number(numeros[n]) + soma;
        
    }
    if(isNaN(soma / numeros.length)){
        console.log("Erro: sómente numeros são validos")
        return true
    }else{
        return soma / numeros.length;
        
    }

}

const genero = function(pessoa,funcao){
    let genero = pessoa.toLowerCase();
    let posicao = funcao.toLowerCase();
    if(genero == "feminino"){
        if(posicao == "aluno"){
            return "A aluna"
        }
        if(posicao == "professor"){
            return "profesora"
        }
    }else{
        if(posicao == "aluno"){
            return "O aluno"
        }
        if(posicao == "professor"){
            return "professor"
        }
    }

}

const vazio = function(arg){
    let argumento = arg;
    if(!argumento){
        console.log("Erro: prencha o formulario!")
        return true
    }
}

const numeroValido = function(numero){
    let nota = Number(numero)

    if(nota < 0 || nota > 100 || isNaN(nota)){
        console.log("Erro: Informe um valor valido!")
        return true
    }

}

module.exports = {
    media,
    genero,
    vazio,
    numeroValido
}