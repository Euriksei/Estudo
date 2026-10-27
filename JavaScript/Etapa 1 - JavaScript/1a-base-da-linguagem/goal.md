# Etapa 1a: Base da linguagem

- Goal: entender os tipos, variáveis, operadores, condicionais, loops e escopo do JavaScript, e explicar o que cada trecho de código faz antes de executá-lo.
- Source: MDN Web Docs, Guia de JavaScript, seções "Gramática e tipos", "Controle de fluxo e tratamento de erros" e "Laços e iterações" - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide
- Help: 3

## O que você deve entender ao final

- A diferença entre `let`, `const` e `var`, e quando usar cada um.
- Os tipos básicos (número, texto, booleano, `null`, `undefined`) e como converter entre eles.
- Como condicionais (`if`, `else`, `switch`) escolhem o caminho do código.
- Como loops (`for`, `while`, `for...of`) repetem uma ação.
- O que é escopo, e por que uma variável existe em uma parte do código e não em outra.

## Plan

- 01 Onde você está: variáveis, condições e repetição.
- 02 Variáveis com `let` e `const`.
- [03 Tipos e operadores](licao-03.html) - passed
- [04 Condicionais: `if`, `else` e `switch`](licao-04.html) - passed
- [05 Loops: `for`, `while` e `for...of`](licao-05.html) - passed
- [06 Escopo](licao-06.html) - passed, first try

## Rules

- Sempre rodar o arquivo e pedir a saída exata do terminal; "rodou certinho" não basta.
- Antes de corrigir, conferir se o arquivo foi salvo.
- Ele aprende bem testando no Node: preferir um teste que mostra o conceito a uma explicação longa.
- Quando uma resposta está incompleta, dizer uma vez o que falta e seguir; não repetir a mesma pergunta em várias rodadas (ele se irrita).
- Lição 03: ele disse que as perguntas estão básicas demais ("chovendo no molhado"). Menos previsão de uma linha; mais desafios que juntam conceitos e problemas do projeto (validação, valores vindos de formulário).
- Autoavaliação dele é otimista (deu 3 em variáveis e loops e errou os dois); conferir sempre com uma pergunta.
- r02 `const` impede só a reatribuição (`lista = [3]` dá erro), mas o conteúdo pode mudar (`lista.push(2)` funciona); `var` ignora o bloco e vale `undefined` antes da linha que o cria - next 2026-10-29, gap 2
- r03a o `+` junta texto se um dos lados é texto; senão converte os dois para número (`true` vira 1, `undefined` vira `NaN`) - next 2026-10-29, gap 2
- r03b usar sempre `===` e converter com `Number()` antes de comparar - next 2026-10-29, gap 2
- r03c `&&` precisa dos dois lados verdadeiros; `||` precisa de um - next 2026-10-29, gap 2
- r03d `||` troca qualquer valor falsy; `??` troca só `null` e `undefined` - next 2026-10-29, gap 2
- r04a no `if / else if`, só o primeiro caminho verdadeiro roda; a condição mais estreita vem primeiro - next 2026-10-29, gap 2
- r04b o `switch` compara com `===` e começa no `case` que combina; sem `break`, roda os `case` de baixo - next 2026-10-29, gap 2
- r05a um loop repete enquanto a condição é verdadeira; para contar as voltas de 1 a 5 com `<=`, são 5 - 1 + 1 - next 2026-10-29, gap 2
- r05b `do...while` roda o bloco uma vez antes do primeiro teste - next 2026-10-29, gap 2
- r06 `let` e `const` só existem no bloco `{ }` onde foram criados; um `let` com o mesmo nome dentro do bloco cria outra variável - next 2026-10-29, gap 2

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
- Lição 03 (27/10/2026): usou `==` no B2 e no B3. É a segunda vez; foi ensinado com um exemplo resolvido.
- Lição 03 A5: trocou `&&` e `||` (achou que `true && false` dá true e `true || false` dá false).
- Lição 03 B2: mudou o estado (`estado = false`) em vez de verificar o estado na condição.
- Lição 03 C1: acha que o JavaScript "não tem o que fazer" com `undefined + 10`; na verdade ele converte `undefined` em `NaN`.
- Lição 03 A3 de novo: "Deve usar o == porque so quero validar o valor". Terceira vez com `==`; agora o teste é tirar o `Number()` e ver o `==` esconder o erro.
- Lição 03 C1 de novo: acha que o `+` junta texto só quando o lado direito é texto.
- Lição 04 Q3: achou que um `switch` sem `break` roda todos os `case` desde o topo; ele começa no `case` que combina.
- Lição 04 Q2: escreveu `!Number.isInteger` sem `(op)`; a função sozinha nunca testa o valor.
- Lição 03 D1: achou que `null` é o mesmo que `undefined`.
- 05 guess: achou que criar `let total` dentro de um bloco dá erro, porque já existe um `total` fora.
- Critério da parte (27/10/2026): "const é para declara um valor imutavel". De novo o equívoco da lição 02; e disse "var nunca usar" sem dizer a diferença. Aceito, com a regra r02 na revisão.
