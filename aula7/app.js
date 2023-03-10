/**
 * Objetivo: Trabalhando com Array
 * Data: 24/02/2023
 * Autor: Eduardo
 * Versão: 1.0
 */

/**
 * [] - significa que estamos manipulando um array de dados
 * {} - significa que estamos manipulando um formato JSON de dados
 */

const listaNomes = ['a', 'b','c','d','e']
const listaProdutos= ['Teclado', 'Mouse','Monitor','Computador','Fone', 'Impresora']
/**
 * @type {[Number]}
 */
const produtos = {}


const removerProduto = (produto, array) => {
    let lisa = array.slice()
    if(lisa.indexOf(produto) == -1) status = false  
    else{status = true}
    if(status){
        let lisa = listaProdutos.slice()
        lisa.splice(lisa.indexOf(produto),1)
        return lisa        
    }else{
        return status
    }
}

const produtoRemovido = removerProduto('1',listaProdutos)

// console.log(listaProdutos)
// console.log(produtoRemovido)



listProdutos = [
    {Nome : "teclado", valor : 80, quantidade : 20},
    {Nome : "monitor", valor : 90, quantidade : 10},
    {Nome : "mouse", valor : 100, quantidade : 15},
]

let listCores = ['Branco','Preto','Azul']
listProdutos[0].cores = listCores
listProdutos[2].cores = listCores
let tipoTeclado = ['Mecanico','Menbrana','Semi-mecanico']
listProdutos[0].tipo = tipoTeclado
let tipoMonitor = ['Full-HD','4K','OLED']
listProdutos[1].tipo = tipoMonitor



let listProdutosJSON = {}

listProdutosJSON.produtos = listProdutos

// for( let i =0 ; Object.keys(listProdutosJSON.produtos).length > i; i++){
// console.log(listProdutosJSON.produtos[i].Nome)
// console.log(listProdutosJSON.produtos[i].valor)
// console.log(listProdutosJSON.produtos[i].tipo)
// console.log(listProdutosJSON.produtos[i].cores)

// }

listProdutosJSON.produtos.forEach( function(dadosProduto){
    console.log(dadosProduto.Nome)
    console.log(dadosProduto.valor)
    console.log(dadosProduto.quantidade)
    console.log(dadosProduto.cores)
})
