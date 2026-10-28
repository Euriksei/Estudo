const prompt = require("prompt-sync")()

function prioridadeValida(Digitado){
    Digitado = Number(Digitado)
    if (!Number.isInteger(Digitado) || Number.isNaN(Digitado) || (Digitado<1||Digitado>3)){
        return false
    } else {
        return true
    }
}

let prio = prompt("Digite a prioridade de 1 a 3: ")
if (prioridadeValida((prio))){
    console.log("Prioridade válida")
} else {
    console.log("Prioridade invalida")
}