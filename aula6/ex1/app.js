var mediaEscolar = require ('./module/mediaEscolar');
var readline = require ('readline');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("************************************")
console.log("**************MÉDIA*****************")
console.log("************************************")

entradaDados.question("Qual o nome do Aluno(a)?: \n", function(Aluno){
    if(mediaEscolar.vazio(Aluno)){
        entradaDados.close()

    }else{
    let nomeAluno = Aluno;
    
    entradaDados.question("Qual o sexo do Aluno?:[feminino, masculino] \n", function(sexoA){
        if(mediaEscolar.vazio(sexoA)){
            entradaDados.close()
    
        }else{

        let sexoAluno = mediaEscolar.genero(sexoA, "aluno");
    
        
        entradaDados.question("Qual o nome do Professor(a)?: \n", function(nomeProfessor){
            if(mediaEscolar.vazio(nomeProfessor)){
                entradaDados.close()
        
            }else{
            let professor = nomeProfessor;
    
            entradaDados.question("Qual o sexo do Professor?:[feminino, masculino] \n", function(sexoP){
                if(mediaEscolar.vazio(sexoP)){
                    entradaDados.close()
            
                }else{

                let sexoProfessor = mediaEscolar.genero(sexoP, "professor");

                entradaDados.question("Qual o nome do curso?: \n", function(nomeCurso){
                    if(mediaEscolar.vazio(nomeCurso)){
                        entradaDados.close()
                
                    }else{
                    let curso = nomeCurso

                    entradaDados.question("Qual o nome da disciplina?: \n", function(nomeDiciplina){
                        if(mediaEscolar.vazio(nomeDiciplina)){
                            entradaDados.close()
                    
                        }else{
                        let diciplina = nomeDiciplina;

                        let notas = [];
                         
                        let i = 1;
                        entradaDados.question(`Entre a nota${i}: \n`, function(nota){
                            if(mediaEscolar.vazio(nota) || mediaEscolar.numeroValido(nota)){
                                entradaDados.close()
                        
                            }else{
                            notas.unshift(nota);
                            i++
                            entradaDados.question(`Entre a nota${i}: \n`, function(nota){
                                if(mediaEscolar.vazio(nota) || mediaEscolar.numeroValido(nota)){
                                    entradaDados.close()
                            
                                }else{
                                notas.unshift(nota);
                                i++
                                entradaDados.question(`Entre a nota${i}: \n`, function(nota){
                                    if(mediaEscolar.vazio(nota) || mediaEscolar.numeroValido(nota)){
                                        entradaDados.close()
                                
                                    }else{
                                    notas.unshift(nota);
                                    i++
                                    entradaDados.question(`Entre a nota${i}: \n`, function(nota){
                                        if(mediaEscolar.vazio(nota) || mediaEscolar.numeroValido(nota)){
                                            entradaDados.close()
                                    
                                        }else{
                                        notas.unshift(nota);
                                        let media = mediaEscolar.media(notas);

                                        if(isNaN(media)){
                                            entradaDados.close()
                                        }else if(media < 70 && media >= 50 ){


                                        }else{
                                            if(media < 50 ){
                                                console.log(
                                                    mediaEscolar.genero(sexoAluno, "aluno") + ` ${nomeAluno} foi reprovado na disciplina ${diciplina} \nCurso: ${curso} \n${mediaEscolar.genero(sexoProfessor, "professor")}: ${professor} \nNotas do aluno: ${notas[0]},${notas[1]},${notas[2]},${notas[3]} \nMédia Final: ${media}` )
                                            }else {
                                                console.log(
                                                    mediaEscolar.genero(sexoA, "aluno") + ` ${nomeAluno} foi aprovado na disciplina ${diciplina} \n
                                                    Curso: ${curso} \n
                                                    ${mediaEscolar.genero(sexoP, "professor")}: ${professor} \n
                                                    Notas do aluno: ${notas[0]},${notas[1]},${notas[2]},${notas[3]} \n
                                                    Média Final: ${media}` )

                                            }
                                            

                                        }
                                        
                                        
                                    }})
                                    
                                }})

                            }})

                        }})
                        
                        



                    }})


                }})

            }})
    
    
        }})
    }})

}
})



/*
let qualquer = [Number(20),Number(20),Number(30)] 

let resultado =  mediaEscolar.media(qualquer)

console.log(resultado) */
