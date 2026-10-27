const prompt = require("prompt-sync")();
let op;

do {
    op = Number(prompt("Digite um valor de 1 a 3: "))

    if (Number.isNaN(op) || !Number.isInteger(op) || (op<1 || op>3)){
    console.log("Prioridade inválida, tente de novo")
    }

} while (Number.isNaN(op) || !Number.isInteger(op) || (op<1 || op>3))

console.log("Prioridade: " + op)


    