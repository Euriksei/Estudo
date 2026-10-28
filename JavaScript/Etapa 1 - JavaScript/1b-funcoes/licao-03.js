const prioridadeValida = (prioridadeInformada) => {
    let prioridade = Number(prioridadeInformada)
    const resultado = (Number.isInteger(prioridade) && !Number.isNaN(prioridade) && !(prioridade<1||prioridade>3))
    return resultado ? (prioridade) : false
}

const formataTarefa = (prioridade, nome) => "[P"+prioridade+"] "+nome

//constante que chama a fun que guarda o valor informado na função
const prioridadeFormatada = prioridadeValida("2")

if(prioridadeFormatada){
    console.log(formataTarefa(prioridadeFormatada,"Estudar"))
} else { console.log("Valor de prioridade invalido")}



