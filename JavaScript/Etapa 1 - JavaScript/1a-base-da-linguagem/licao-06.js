const tarefas = ["Comprar pão", "Pagar conta", "Estudar JS"]
let urgente
for (const t of tarefas){
    if (t === "Pagar conta"){
        urgente = true
    }
}
if (urgente){
    console.log("Tem tarefa urgente")
}