const prioridadeValida = (prioridadeInformada) => {
    let prioridade = Number(prioridadeInformada)
    const resultado = (Number.isInteger(prioridade) && !Number.isNaN(prioridade) && !(prioridade<1||prioridade>3))
    return resultado ? prioridade : false
}

function checar (texto, validar) {
    const resultado = validar(texto)

    if(resultado){return "ok: "+ texto}
    else { return "inválido: "+ texto}
}

const nomeValido = (nome) =>  nome!==""

console.log(checar("2", prioridadeValida));
console.log(checar("9", prioridadeValida));
console.log(checar("Estudar", nomeValido));
console.log(checar("", nomeValido));

