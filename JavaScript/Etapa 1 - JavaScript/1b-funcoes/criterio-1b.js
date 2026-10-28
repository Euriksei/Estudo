// 1. prazoValido: recebe o texto que veio do formulário. Devolve true se o texto 
// for um número inteiro de 1 a 30, e false se não for.

// 2. contarValidos: recebe um validador como callback e três textos. 
// Devolve quantos dos três passam no validador. Ela não pode chamar a prazoValido pelo nome. 
// Tem que usar a callback que recebeu.

const prazoValido = (n) => {
    n = Number(n)
    return Number.isInteger(n) && !Number.isNaN(n) && (n>=1 && n<=30)
}

function contarValidos(validador, a ,b, c){
    let cont = 0
    if(validador(a)) cont++
    if(validador(b)) cont++ 
    if(validador(c)) cont++ 
    return cont
}

console.log(contarValidos(prazoValido, "5", "40", "abc"));
console.log(contarValidos(prazoValido, "1", "30", "15"));
console.log(contarValidos(prazoValido, "0", "", "2.5"));
console.log(contarValidos((texto) => texto !=="", "", "Estudar", ""))
     