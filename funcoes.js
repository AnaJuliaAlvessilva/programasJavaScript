function exe1(){
    // recuperar os dados do usuario
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
    var nota4 = Number(document.getElementById("nota4").value);
    // processamento
    // calcular média
    var media = (nota1+nota2+nota3+nota4)/4
    // verifica aprovação
    if (media >= 7){
        console.log("APROVADO COM MÉDIA " + media)
    }
    else {
        console.log("REPROVADO COM MÉDIA " + media)
    }
}
function exe2(){
    // recuperar os dados do usuario
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    // processamento
    // calcular média
    var media = (n1+n2)/2
    // verifica aprovação
    if (media >= 7){
        console.log("APROVADO COM MÉDIA " + media)
    }
    else if ((media >= 3) && (media < 7)){
        console.log("EXAME COM MÉDIA " + media)
    }
    else {
        console.log("REPROVADO COM MÉDIA " + media)
    }
}
function exe3(){
    // recuperar os dados do usuario
     var num1 = Number(document.getElementById("num1").value);
     var num2 = Number(document.getElementById("num2").value);
    // processamento
    // verifica aprovação
    if (num1 > num2){
        console.log("O MENOR NÚMERO É " + num2)
    }
    else {
        console.log("O MENOR NÚMERO É " + num1)  
    }
}
function exe4(){
    // recuperar os dados do usuario
     var nu1 = Number(document.getElementById("nu1").value);
     var nu2 = Number(document.getElementById("nu2").value);
     var nu3 = Number(document.getElementById("nu3").value);
    // processamento
    // verifica aprovação
    if ((nu1 > nu2) && (nu2 > nu3)){
        console.log("O MAIOR NÚMERO É " + nu1)
    }
    else if (nu2 > nu3){
        console.log("O MAIOR NÚMERO É " + nu2)
    }
    else {
        console.log("O MAIOR NÚMERO É " + nu3)  
    }
    if ((nu1 == nu2) || (nu2 == nu3)){
        console.log("EXISTEM NÚMEROS IGUAIS")  
    }
}
function exe5(){
    // recuperar os dados do usuario
     var nro1 = Number(document.getElementById("nro1").value);
     var nro2 = Number(document.getElementById("nro2").value);
     var op = Number(document.getElementById("op").value);
    switch(op){
        case 1: resultado = (nro1 + nro2) / 2
           break //não entra no case de baixo
        case 2: if (nro1 >= nro2){
           resultado = nro1 - nro2
        }
        else {
               resultado = nro2 - nro1
        } 
           break //não entra no case de baixo
        case 3: resultado = nro1 * nro2
           break //não entra no case de baixo
        case 4: if (nro2 != 0){
            resultado = nro1 / nro2
    }
                else {
                    resultado = "DIVISÃO POR ZERO"
                }
           break //não entra no case de baixo
        default: resultado = "OPÇÃO INVÁLIDA"
    }
    alert("RESULTADO " + resultado)
}
function exe7(){
    var salario = Number(prompt("Informe o salário"))
    if (salario < 500){
        var novo = salario + salario*30/100
        alert("Novo Salário " + novo)
    }
    else {
        alert("Não tem direito a aumento! Meus sentimentos")
    }
}
function exe22(){
    var idade = Number(document.getElementById("idade").value)
    var peso = Number(document.getElementById("peso").value)
    var risco = 0
    if (idade < 20){
        if (peso < 60){
            risco = 9
        }
        else if (peso <= 90){
            risco = 8
        }
        else {
            risco = 7
        }
    }
    else if (idade < 50){
        if (peso < 60){
            risco = 6
        }
        else if (peso <= 90){
            risco = 5
        }
        else {
            risco = 4
        }
    }
    else if (idade > 50){
            if (peso < 60){
                risco = 3
            }
            else if (peso <= 90){
                risco = 2
            }
            else {
                risco = 1
            }
        }
    
    alert("Risco " + risco)
}