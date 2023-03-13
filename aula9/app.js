/******************************************************************************************
 * Objetivo: Criar uma API para manipulação de dados de Estados e Cidades
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Data: 10/03/2023
 * Versão: 1.0
 ******************************************************************************************/

/**
 * Express --> dependencia do Node, que permite a integração entre o protocolo http com o código
 * Comando para instalação do Express --> npm install express --save
 * 
 * Cors --> Gerenciador de permissões para o protocolo HTTP
 * Comando para instalação do Cors --> npm install cors --save
 * 
 * Body-Parser --> É uma dependencia que permite manipular dados enviados pelo body da requisição
 * Comando para instalação do Body-Parser --> npm install body-parser --save
 * 
 ***/

//import das dependencias para criar a API
//Responsável pelas requisições
const express = require('express');

//Responsável pelas permissões
const cors = require('cors');

//Responsável pela manipulação do body da requisição 
//Body conteudo da mensagem --> Header e Main
const bodyParser = require('body-parser');

//Cria um objeto com as informações da classe express
const app = express();

const estadosCidades = require('./modulo/estados_cidades.js')

//define as permissões no header da API
app.use((request, response, next) => {
    //Permite gerenciar a origem das requisições da API
    // * --> significa que a API será publica
    // IP --> se colocar o IP, a API somente responderá para aquela Máquina/Servidor/Requisição
    response.header('Access-Control-Allow-Origin', '*');

    //Permite gerenciar quais verbos (metodos) poderão fazer requisições
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Ativa no cors das requisições as permissões estabelecidas
    app.use(cors());

    next();
});
//endPoints


//endPoint para listar os Estados
app.get('/estados', cors(), async function(request, response, next) {

    //port do arquivo de funções
    //caha a função que retorna os estados
    let listaDeEstado = estadosCidades.getListaDeEstados()

    //tratamento para validar se a função realizou o processamento
    if(listaDeEstado){
        response.json(listaDeEstado);
        response.status(200);    
    }else{
        response.status(500)
        
    }

});

app.get('/estado/sigla/:uf', cors(), async function(request, response, next){
    //:uf é uma variavel que será utilizada para passagens de valores, na URL da requisição

    //recebe o valor da variavel uf, que será encaminhada na URL da requisição
    let siglaEstado = request.params.uf;
    let statusCode
    let json = {}
    //tratamento para validar os valores incaminhados no parametro

    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2){
        statusCode = 400
        json.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada, ou não atende a quantidade de caracteres (2 digitos)"
    }else{
        let estado =estadosCidades.getDadosEstado(siglaEstado)
        if(estado){
            statusCode = 200
            json =estado
        }else{
            statusCode = 404
            
        }


    }
    
    response.status(statusCode)
    response.json(json)

})

//endPoint lista as caracteristicas do estado pela sigla
app.get('/capital/sigla/:uf', cors(), async function(request, response, next){
    //:uf é uma variavel que será utilizada para passagens de valores, na URL da requisição

    //recebe o valor da variavel uf, que será encaminhada na URL da requisição
    let siglaEstado = request.params.uf;
    let statusCode
    let json = {}
    //tratamento para validar os valores incaminhados no parametro

    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2){
        statusCode = 400
        json.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada, ou não atende a quantidade de caracteres (2 digitos)"
    }else{
        let estado =estadosCidades.getCapitalEstado(siglaEstado)
        if(estado){
            statusCode = 200
            json =estado
        }else{
            statusCode = 404
            
        }


    }
    
    response.status(statusCode)
    response.json(json)

})

//endPoint lista as caracteristicas do estado pela sigla
app.get('/regiao/:regiao', cors(), async function(request, response, next){
    //:uf é uma variavel que será utilizada para passagens de valores, na URL da requisição

    //recebe o valor da variavel uf, que será encaminhada na URL da requisição
    let regiao= request.params.regiao;
    let statusCode
    let json = {}
    //tratamento para validar os valores incaminhados no parametro

    if(regiao == '' || regiao == undefined){
        statusCode = 400
        json.message = "Não é possivel processar a requisição pois o paremetro é invalido"
    }else{
        let estados =estadosCidades.getEstadosRegiao(regiao)
        if(estados){
            statusCode = 200
            json = estados
        }else{
            statusCode = 404
            
        }


    }
    
    response.status(statusCode)
    response.json(json)

})

//endPoint lista as caracteristicas do estado pela sigla
app.get('/capital', cors(), async function(request, response, next){
    //:uf é uma variavel que será utilizada para passagens de valores, na URL da requisição

    response.status(200)
    response.json(estadosCidades.getCapitalPais())

})

app.get('/cidades/sigla/:uf', cors(), async function(request, response, next){
    //:uf é uma variavel que será utilizada para passagens de valores, na URL da requisição

    //recebe o valor da variavel uf, que será encaminhada na URL da requisição
    let siglaEstado = request.params.uf;
    let statusCode
    let json = {}
    //tratamento para validar os valores incaminhados no parametro

    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2){
        statusCode = 400
        json.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada, ou não atende a quantidade de caracteres (2 digitos)"
    }else{
        let estado = estadosCidades.getCidades(siglaEstado)
        if(estado){
            statusCode = 200
            json =estado
        }else{
            statusCode = 404
            
        }


    }
    
    response.status(statusCode)
    response.json(json)

})



//Permite carregar os endpoint criados e aguarda as requições
//Pelo protocolo HTTP na porta 8080

app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080.')

});