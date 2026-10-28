# Etapa 1b: Funções

- Goal: entender como funções recebem dados, devolvem resultados e podem ser passadas como valores, incluindo arrow functions e callbacks.
- Source: MDN Web Docs, Guia de JavaScript, seção "Funções" - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide
- Help: 3

## O que você deve entender ao final

- Como declarar e chamar uma função, com parâmetros e retorno.
- A diferença entre uma função comum e uma arrow function, e quando usar cada uma.
- Que uma função pode ser passada como valor para outra função (callback).

## Plan

- [01 Onde você está: chamadas de função e valores de retorno](licao-01.html) - passed
- [02 Declarar e chamar funções, com parâmetros e retorno](licao-02.html) - passed
- [03 Arrow functions](licao-03.html) - passed
- [04 Funções como valores (callbacks)](licao-04.html) - passed
- [05 Exercício misto](licao-05.html) - passed

## Rules

- r02a a função recebe dados pelos parâmetros e devolve com `return`; sem `return` devolve `undefined`, e quem chama decide o que mostrar - next 2026-10-30, gap 2
- r02b `somar` é a própria função; `somar(2, 3)` roda a função e vale o que o `return` devolveu - next 2026-10-30, gap 2
- r02c o `return` devolve o valor e encerra a função; as linhas depois dele não rodam - next 2026-10-30, gap 2
- r03a a arrow sem chaves devolve sozinha o valor da expressão; com chaves, só devolve com `return`, senão dá `undefined` - next 2026-10-30, gap 2
- r03b a forma sem chaves só serve quando o corpo é uma expressão; com `const` ou `if` no corpo, as chaves são obrigatórias - next 2026-10-30, gap 2
- r04a uma callback é uma função passada como argumento; a função de fora chama ela - next 2026-10-30, gap 2
- r04b passar `mostrar` passa a função; passar `mostrar()` passa o que ela devolve - next 2026-10-30, gap 2

## Misconceptions

- 01 Q1 e Q2 (27/10/2026): acha que os parênteses só dizem "qual variável analisar", e que `console.log(prompt)` mostra o que foi lido. Não separa a função (`prompt`) da chamada (`prompt()`). Testar de novo na Q1 da lição 02.
- 01 guess: marcou "só 8": achou que `console.log(r)` não mostra nada quando a função não tem `return`. Ela mostra `undefined`.
- 02 Q2: escreveu a função sem parâmetro (lê o `prio` de fora) e com `console.log` em vez de `return`.
- 02 Q2 de novo (28/10/2026): pôs o parâmetro, mas ainda usa `console.log` em vez de `return`, e faz o `Number()` fora da função, então `prioridadeValida("2")` recusa. Segunda vez: ensinado com o exemplo resolvido `ehPar`.
- 03 Q1 (28/10/2026): acha que a arrow sem chaves precisa de uma expressão que dá `true` ou `false`; qualquer expressão serve.
- 03 Q2 (28/10/2026): de novo guardou o valor numa variável de fora (`resultado`) em vez de usar o que a função devolve; `formataTarefa` com `console.log` em vez de devolver; `prioridadeValida` devolvendo texto em vez de `true`/`false`; sem `Number()`. Mesmo equívoco da 02 Q2, segunda vez: ensinado com o exemplo `ehPar` + `marcar`.
- 03 Q2 (28/10/2026): pôs o `Number()` no `return`, depois do teste; achou que "indifere se o valor entra como number ou texto, já que vai ser validado antes". Não sabia que `Number.isInteger` e `Number.isNaN` não convertem texto, e `<` e `>` convertem. Explicado com teste no Node; ele disse que ficou claro.
- 04 Q2 (28/10/2026): `nomeValido = (nome) => valido = nome!=""` cria uma variável global sem `let`; terceira vez que guarda o resultado numa variável de fora em vez de só devolver. Usou `!=` em vez de `!==`.
- 04 Q1: sabe que `mostrar()` roda na hora sem parâmetro, mas não disse que `acao` recebe `undefined` e que `acao(1)` dá `TypeError`.
- 05 Q3 (28/10/2026): escolheu `checar("2", prioridadeValida("2"))`; passa o resultado em vez da função, logo depois de explicar certo o `mostrar()` na 04 Q1. Revisar r04b.
- 02 Q3: "vai retornar alta de todo jeito". Ver se ele sabe que `classificar(1)` devolve "Normal".
- Critério da parte (28/10/2026): `criterio-1b.js` com `prazoValido` e `contarValidos(validador, a, b, c)`, sem consultar. Primeira entrega só com uma chamada usando números, sem a arrow direto na chamada; na segunda, as 4 chamadas deram 1, 3, 0 e 1. Aceito.
