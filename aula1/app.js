//comentario em linha
/*
    comentario em bloco
*/

//permite escrever um mensagem no terminal
console.log('Testando o node.js');

//import da biblioteca que faz entrada da dados pelo usuário
var readline = require ('readline')

//Criamos um objeto entrada dados com as referencias do readline
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
função de call back é uma função que quando chamada ela retorna o seu
conteudo em uma única instituição, ou seja, em apenas um passo na programação
*/ 


//criamos uma função de call back para receber os dados digitados pelo usuario
    //o objeto entradaDados aguarda a digitação do usuário, após a digitação do
    //conteúdo é acionado um call back para encaminhar os dados para o console.log.
    //Esse conteúdo foi encaminhado através do parametro dados a função
entradaDados.question("Digite seu nome: \n", function(nome){

    console.log('bemvindo, ' + nome + ' ao servidor node.js');

});