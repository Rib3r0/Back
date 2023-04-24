/**
 * objetivo: Implementa a regra de negocio entre o app e a model
 * Data: 14/04/2023
 * Autor: Eduardo Ribeiro
 * Versão: 1.0
 */

//Função para receber os dados do APP e enviar para Model para enserir um novo item
const inserirAlunos = function(dadosAluno){

}
//Função para receber os dados do APP e enviar para Model para atualizar um item existente
const atualizarAluno = function(dadosAluno){

}

//Função para excluir um aluno filtrado pelo id, que será encaminhado para a model
const deletarAluno = function(id){

}

//Função para retornar todos os itens da tabela recebidos da model
const selecionarTodosAlunos = async function(){
    //import do arquivo de acesso ao banco de dados
    const alunoDAO = require('../model/DAO/alunoDAO.js')

    const dadosAluno = await alunoDAO.selectAllAluno()
    let dadosJSON = {}

    if(dadosAluno){
        dadosJSON.alunos = dadosAluno
        
        return dadosJSON
    }
    else{
        return false
    }
}
//Função para buscar um item filtrado pelo ID , que será emcaminhado pela model
const buscarIdAluno = function(id){

}

module.exports = {
    selecionarTodosAlunos
}