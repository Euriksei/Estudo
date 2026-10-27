const prompt = require("prompt-sync")()

console.log("1 - Criar tarefa")
console.log("2 - Concluir tarefa")
console.log("3 - Apagar tarefa")

let op = Number(prompt("O que deseja fazer ?: "))
if (Number.isNaN(op) || !Number.isInteger || (op < 1 || op > 3 )){
    console.log("Opção Invalida")
} 
else {
    switch (op){
        case 1: console.log("Criando uma tarefa")
        break
        case 2: console.log("Concluindo uma tarefa")
        break
        case 3: console.log("Apagando tarefa")
        break
        default: console.log("Digite um valor")
    }

}

