/**
 * objetivo: interação com o banco de dados
 * Data: 14/04/2023
 * Autor: Eduardo Ribeiro
 * Versão: 1.0
 */

//Inserir um novo registro no banco de dados
const insertAluno = function(dadosAluno){

}
//Atualizar um novo registro no banco de dados
const updateAluno = function(dadosAluno){

}

//Deleta um registro no banco de dados
const deleteAluno = function(id){

}

//Retorna todos os registros no banco de dados
const selectAllAluno = async function(){
    //import da biblioteca do prisma client (responsavel por manipular dados no banco de dados)
    const {PrismaClient} = require('@prisma/client') 

    //Instancia da classe do PrismaClient
    const prisma = new PrismaClient()

    //variavel com o script sql para executar no banco de dados
    let sql = 'select * from tbl_aluno'

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0){
        return rsAluno
    }else{
        return false
    }

}

//Retorna o registro no banco de dados pelo id
const selectByIdAluno = function(id){

}

module.exports = {
    selectAllAluno
}