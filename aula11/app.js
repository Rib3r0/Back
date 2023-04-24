/**
 * Objetivo: API para imteragir com o banco de dados (GET,POST,DELETE,PUT)
 * Data: 14/04/2023
 * Autor: Eduardo Ribeiro
 * Versão: 1.0
 */

/**
 *  Para realizar a conexão com o banco de dados iremos utilizar o PRISMA
 *      npm install prisma --save
 *      npx prisma
 *      npx prisma init
 *      npm install @prisma/cliente
 */



const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next) => {
    //permissões de origem da requisição
    response.header('Access-Control-Allow-Origin','*')
    //permissões de metodos que serão utilizados na API
    response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')

    //define as permissões para o cors
    app.use(cors())

    //continua para a leitura dos EndPoints
    next();

})
327

//CRUD (CREATE, READ, UPDATE, DELETE)

//EndPoint: Retorna todos os dados de alunos
app.get('/v1/liom-school/alunos', cors(), async function(request, response){
    let controllerAluno = require('./controller/controller_aluno.js');

    let dados = await controllerAluno.selecionarTodosAlunos()

    if(dados){
        response.json(dados)
        response.status(200)
    }else{
        response.json()
        response.status(404)
    }
})

//EndPoint: Retorna dados do aluno pelo id
app.get('/v1/liom-school/alunos/:id', cors(), async function(request, response){
    
})

//EndPoint: inserir um novo aluno
app.post('/v1/liom-school/alunos', cors(), async function(request, response){
    
})

//EndPoint: Atualiza um aluno pelo id
app.put('/v1/liom-school/alunos/:id', cors(), async function(request, response){
    
})

//EndPoint: Exclui um aluno pelo id
app.delete('/v1/liom-school/alunos/:id', cors(), async function(request, response){
    
})

app.listen(8080, function(){
    console.log('servidodr aguardando requisições na porta 8080')
})