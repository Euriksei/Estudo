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
- [02 Declarar e chamar funções, com parâmetros e retorno](licao-02.html) - refazer Q2
- 03 Arrow functions.
- 04 Funções como valores (callbacks).
- 05 Exercício misto.

## Rules

(nenhuma regra aprendida ainda)

## Misconceptions

- 01 Q1 e Q2 (27/10/2026): acha que os parênteses só dizem "qual variável analisar", e que `console.log(prompt)` mostra o que foi lido. Não separa a função (`prompt`) da chamada (`prompt()`). Testar de novo na Q1 da lição 02.
- 01 guess: marcou "só 8": achou que `console.log(r)` não mostra nada quando a função não tem `return`. Ela mostra `undefined`.
- 02 Q2: escreveu a função sem parâmetro (lê o `prio` de fora) e com `console.log` em vez de `return`.
- 02 Q3: "vai retornar alta de todo jeito". Ver se ele sabe que `classificar(1)` devolve "Normal".
