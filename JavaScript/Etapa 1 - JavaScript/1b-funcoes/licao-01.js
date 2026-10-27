const prompt = require("prompt-sync")()

function prioridadeValida(){
    if (!Number.isInteger(prio) || Number.isNaN(prio) || (prio<1||prio>3)){
        console.log("Digite um número inteiro valido")
    } else {
        console.log("Prioridade: "+prio)
    }
}

let prio = Number(prompt("Digite a prioridade de 1 a 3: "))
prioridadeValida(prio)