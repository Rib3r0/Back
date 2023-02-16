var tabuada = require ('./module/tabuada.js');
var readline = require ('readline');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("************************************")
console.log("*************TABUADA****************")
console.log("************************************")

entradaDados.question("Qual tabuada inicial?: \n", function(numero){
    let multiplicandoInicial = 0;
    if(!tabuada.validarNumero(numero)){
        entradaDados.close();  
    }else{
        multiplicandoInicial = Number(numero);

        entradaDados.question("Qual a tabuada final?; \n", function(numero){
            let multiplicandoFinal = 0;
            if(!tabuada.validarNumero(numero)){
                entradaDados.close();              
            }else{
                multiplicandoFinal =  Number(numero);
    
                entradaDados.question("Qual o minimo?: \n", function(numero){
                    let minimo = 0;
                    if(isNaN(numero)){
                        console.log("ERRO: Informe somente numeros!")
                        entradaDados.close();
                    }else{
                        minimo = Number(numero);

                        entradaDados.question("Qual o maximo?: \n", function(numero){
                            let maximo = 0;
                            if(isNaN(numero)){
                                console.log("ERRO: Informe somente numeros!")
                                entradaDados.close();
                            }else{
                                maximo = Number(numero);

                                let i = multiplicandoInicial
                                let n = multiplicandoFinal
                                while(i <= n){
                                    console.log('\n');
                                    tabuada.tabuada(minimo,maximo,i);
                                    i++
                                }
                
                                entradaDados.close();
                            }

                        })
                    }
        
               
            })
            }
    
    
    
    
        })
    }
    
})