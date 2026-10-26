# Etapa 1a: Base da linguagem

- Goal: entender os tipos, variáveis, operadores, condicionais, loops e escopo do JavaScript, e explicar o que cada trecho de código faz antes de executá-lo.
- Source: MDN Web Docs, Guia de JavaScript, seções "Gramática e tipos" e "Controle de fluxo e tratamento de erros" - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide
- Help: 2

## O que você deve entender ao final

- A diferença entre `let`, `const` e `var`, e quando usar cada um.
- Os tipos básicos (número, texto, booleano, `null`, `undefined`) e como converter entre eles.
- Como condicionais (`if`, `else`, `switch`) escolhem o caminho do código.
- Como loops (`for`, `while`, `for...of`) repetem uma ação.
- O que é escopo, e por que uma variável existe em uma parte do código e não em outra.

## Plan

- 01 Onde você está: variáveis, condições e repetição.
- 02 Variáveis com `let` e `const`.
- 03 Tipos e operadores.
- 04 Condicionais: `if`, `else` e `switch`.
- 05 Loops: `for`, `while` e `for...of`.
- 06 Escopo.

## Rules

- Sempre rodar o arquivo e pedir a saída exata do terminal; "rodou certinho" não basta.
- Antes de corrigir, conferir se o arquivo foi salvo.
- Ele aprende bem testando no Node: preferir um teste que mostra o conceito a uma explicação longa.
- Quando uma resposta está incompleta, dizer uma vez o que falta e seguir; não repetir a mesma pergunta em várias rodadas (ele se irrita).
- Lição 03: ele disse que as perguntas estão básicas demais ("chovendo no molhado"). Menos previsão de uma linha; mais desafios que juntam conceitos e problemas do projeto (validação, valores vindos de formulário).
- Autoavaliação dele é otimista (deu 3 em variáveis e loops e errou os dois); conferir sempre com uma pergunta.

## Misconceptions

- Lição 01 (26/10/2026): achou que `const` aceita receber um novo valor (A2). Corrigido.
- Lição 01: erro de contagem no `for`. Achou que `i = 0; i < 3` roda 4 vezes (A4), e em B2 começou em 0 em vez de 1. Também achou que `i >= 3` faria rodar 4 vezes. Corrigido, mas reforçar na lição 05.
- Lição 01: declarou `let nota;` sem valor e não percebeu que ela vale `undefined` (B1). Corrigido.
- Lição 01: usou `i` no `for` sem declarar com `let`, e achou que isso "não compila" (B2). Corrigido com o teste do `console.log(i)` fora do loop.
- Lição 02: achou que `var` serve para "o que varia" (usou `var` para status e prioridade). O certo é `let`.
- Lição 02: achou que `const limite;` sem valor funciona (A2).
- Lição 02: achou que `lista = [9]` dá erro de "posição que não existe"; o erro é de reatribuição de `const` (A3).
- Lição 02: achou que usar uma variável `var` antes de criar dá erro; na verdade ela vale `undefined` (hoisting) (A4).
- Lição 02: nome de variável com espaço (`const Tarefa 1;`).
- Lição 02: achou que `versao` deveria ser `let` porque muda entre versões do app; confundiu editar o código com reatribuir durante a execução.
- Lição 02: achou que um cálculo solto (`a + 10;`) aparece no terminal; só aparece o que está em `console.log`.
- Lição 02 concluída (26/10/2026). Ainda revisar no fim da parte: `const` = "não recebe outro valor", não "valor que não muda"; e quando usar cada palavra. `undefined + 10` deu `NaN`: usar como gancho da lição 03.
- Lição 03: na B1, achou que basta tirar as aspas do "3"; não percebeu que o valor vem do formulário e precisa ser convertido com `Number()`.
- Lição 03: acha que `==` ou `===` "depende do uso"; a regra é usar sempre `===`.
