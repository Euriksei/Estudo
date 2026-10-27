//B2, B3, D3

const prompt = require('prompt-sync')();
const prio = Number(prompt("Qual a prioridade da tarefa (de 1 a 3)? "))
let estado = false

if (Number.isNaN(prio) || !Number.isInteger(prio)){
    console.log("Favor digitar um numero inteiro valido")
} else {
    if(prio < 1 || prio > 3){
    console.log("Defina um valor válido")
    } else {
    console.log('Prioridade definida como: '+prio)

        if (prio == 3 && estado==false){
        console.log("Urgente")
        }
        if ( prio%2==0){
        console.log("Par")
        } else {
        console.log("impar")
        }
    }
}


