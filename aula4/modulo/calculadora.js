/***************************************************************************** 
    objetivo: Ralizar calculos mateméticos (Soma, Subtração, Multiplicação e Divisão)
    data: 03/02/2023
    Autor: Eduardo
    versão: 1.0
******************************************************************************/

//forma 01 de se criar uma função em java script
//Realizar calcul matemátixo das 4 operações (SOMAR , SUBTRAIR, MULTIPLICAR E DIVIDIR)
function calcular (numero1, numero2, tipoCalculoo){

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculoo.toLowerCase();

    let resultado;
    let status = true; //Varialvel booleana para indentificar o status do calculo

        // if(operacao == 'somar')
        //     resultado = valor1 + valor2;
        // else if(operacao == 'subtrair')
        //     resultado = valor1 - valor2;
        // else if(operacao == 'multiplicar')
        //     resultado = valor1 * valor2;
        // else if(operacao == 'dividir' || operacao == 'divisão'){
        //     if(valor2 == 0){
        //         console.log('Erro: Nao é possivel fazer uma divisão por 0.');
        //         status = false;
        //     }else
        //         resultado = parseFloat(valor1) / parseFloat(valor2);        
        // }
        // else{
            // console.log('Erro: aperação invalida');
            // status = false;
        // }

        switch (operacao)
        {
            case 'somar':
                resultado = somar(valor1, valor2);
                break;
            case 'subtrair':
                resultado = subtrair( valor1 , valor2);
                break;
            case 'multiplicar':
                resultado = multiplicar(valor1 , valor2);
                break;
            case 'dividir':  
                if(valor2 == 0){
                    console.log('Erro: Nao é possivel fazer uma divisão por 0.');
                    status = false;
                }else
                    resultado = dividir(valor1,valor2); 

                break;   
                
            default:
                console.log('Erro: aperação invalida');
                status = false;
        }

        if(resultado != undefined)
            return resultado;
        else
            return status;
}
//forma 02 de se criar uma função em java script
const calcular = function(numero1, numero2, tipoCalculoo){

}

//todas essas fuções serão calculo privados
//forma 03 de se criar uma função em java script (modelo arrow function)
const somar       = (valor1, valor2) => Number(valor1 + valor2);
const subtrair    = (valor1, valor2) => Number(valor1 - valor2);
const multiplicar = (valor1, valor2) => Number(valor1 * valor2);
const dividir     = (valor1, valor2) => Number(valor1 / valor2);

module.exports = {
    calcular
}