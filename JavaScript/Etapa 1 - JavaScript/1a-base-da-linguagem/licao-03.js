const prompt = require('prompt-sync')();
const prio = Number(prompt("Qual a prioridade da tarefa (de 1 a 3)? "));

if (Number.isNaN(prio)){
    console.log("Favor digitar um numero");

    if(prio < 1 || prio > 3){
        console.log("Defina um valor válido");
    }
    
} else {
    console.log('Prioridade definida como: '+prio);
}


