/***************************************************************************** 
    objetivo: Realizar a media escolar de 4 notas dos alunos
    data: 27/01/2023
    Autor: Eduardo
    versão: 1.0
******************************************************************************/

console.log('Sistema de Calculo de Médias Escolares');

//importe da biblioteca para a entrada de dados
var readline = require ('readline')
// const { stdin } = require('process');

//criamos uma objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**  CONCEITO SOBRE CRIAÇÃO DE VARIAVEIS
 * 
 * var - toda variavel criada como var tem por objetivo ser um escopo global,
 *      ou seja , ela podera sem utilizada em diversos pontos da programação
 * 
 * let - toma variavel criada com let, tem por objetivo ser um escopo local,
 *      ou seja, sera utilizada somente naquela função
 * 
 * const - Tem por objetivo criar um espaço em memória para armazenar dados
 *      que não sofrem mudança
 * 
 ***********************************************************/


// função de callback para retornar o nome do aluno
entradaDados.question('Digite o nome do aluno: \n', function (nome){
    //variavel local para receber o nome do aluno, que vai ser retornado
    //pela função
    let nomeAluno = nome;

    //função de callback para entrada da nota 1
    entradaDados.question('Digite a nota1: \n', function (nota1){
        
        let primeiraNota = nota1;

        //função de callback para entrada da nota 2
        entradaDados.question('Digite a nota2: \n', function (nota2){

            let segundaNota = nota2;
            //função de callback para entrada da nota 3
            entradaDados.question('Digite a nota3: \n', function (nota3){

                let terceiraNota = nota3;
                //função de callback para a entrada da nota 4
                entradaDados.question('Digite a nota4: \n', function (nota4){

                    let quartaNota = nota4;
                    let media = 0;

                    /**Conversão de dados para numero
                     * parseInt() - converte inteiro
                     * parseFloat() - converte real
                     *  Vem da classe Number
                     * ex: Number.parseInt() ou Number();
                     * 
                     */

                    /** OPERADORES DE COMPARAÇÃO
                     * 
                     * ==  (verifica a igualdade do conteudo)
                     * !=  (verifica a diferenção do conteudo)
                     * <   (verifica o menor valor)
                     * >   (verifica o maior valor)
                     * <=  (verifica o menor ou igual valor)
                     * >=  (verifica o maior ou igual valor)
                     * === (verifica a igualdade do conteudo e tipagem de dados)
                     * 
                     * ex: 0 == 0       V
                     *     0 == '0'     V
                     *     0 === '0'    F
                     * 
                     * 
                     */

                    /** OPERADORES LOGICOS
                     * OU       || (pipe)  OR
                     * E        &&         AND
                     * NEGAÇÃO  !          NOT
                     * 
                     */

                    /** ORDEM DE OPERADORES LOGICOS
                     * 0º ()
                     * 1º Negação
                     * 2º E
                     * 3º OUs
                     */

                    //validação para tratar entradas vazias
                    if(primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == ''){
                        console.log('ERRO: é necessário digitar algum valor nas entradas');
                    }else if(isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)){
                        console.log('ERRO: é necessário digitar algum numero nas entradas');
                    }else if(primeiraNota > 10 || primeiraNota < 0 || segundaNota > 10 || segundaNota < 0 ||
                        terceiraNota > 10 || terceiraNota < 0 || quartaNota > 10 || quartaNota < 0){
                            console.log('ERRO: as notas devem ser entre 0 a 10');
                    }else{
                        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota))/4;

                        console.log('MEDIA: ' + media);
                        if(media >= 7){
                            console.log('STATUS: APROVADO');
                        }else{
                            console.log('STATUS: REPROVADO');
                        }
                    }



                });

            });

        });
        
    });
});