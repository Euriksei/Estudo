# Histórico de estudos

Registro das sessões de estudo. Atualizado ao encerrar cada sessão.

---

## 27/10/2026

- Lições feitas:
  - 1a: lições 03 (tipos e operadores), 04 (condicionais), 05 (loops) e 06 (escopo) concluídas. Parte 1a terminada, com o critério de `let`, `const` e `var` aceito.
  - 1b: lição 01 (onde você está) concluída; lição 02 (declarar e chamar funções) aberta.
- Respostas pendentes: 1b lição 02, Q2. Reescrever `prioridadeValida` no `licao-02.js`, com parâmetro e `return` (`true` ou `false`), sem `prio` fora da função. Mandar a saída das 5 chamadas.
- Equívocos:
  - Usou `==` de novo (3 vezes na lição 03). Agora usa `===`.
  - Trocou `&&` e `||` (corrigido).
  - Achou que um `switch` sem `break` roda desde o topo (corrigido).
  - Chamou `const` de "valor imutável" de novo. Vai para a revisão.
  - Não separa a função (`prompt`) da chamada (`prompt()`). Acha que `console.log(prompt)` mostra o que foi lido.
  - Escreveu uma função sem parâmetro e com `console.log` em vez de `return`.
- Mudanças: cada parte agora tem um `index.html` com uma aba por lição. As preferências ficaram no `Etapa 1 - JavaScript/Learner.md`.
- Próxima lição: refazer a Q2 da 1b lição 02, e depois a 1b lição 03 (arrow functions). Revisão da 1a (lições 02 a 06) em 29/10/2026.

---

## 28/10/2026

- Lições feitas:
  - 1b: lição 02 (declarar e chamar funções) concluída, depois de refazer a Q2.
  - 1b: lição 03 (arrow functions), lição 04 (callbacks) e lição 05 (exercício misto) concluídas.
  - 1b: critério da parte aceito (`criterio-1b.js`: `prazoValido` e `contarValidos` com callback; as 4 chamadas deram 1, 3, 0 e 1). Parte 1b terminada.
- Respostas pendentes: nenhuma.
- Equívocos:
  - Guarda o resultado numa variável de fora (`resultado`, `valido` sem `let`) em vez de só devolver com `return`. Três vezes (02 Q2, 03 Q2, 04 Q2).
  - Usava `console.log` dentro da função em vez de `return` (02 Q2 e 03 Q2). Corrigido.
  - Converte com `Number()` fora da função ou depois do teste. Achou que "indifere" se o valor entra como texto ou número; não sabia que `Number.isInteger` e `Number.isNaN` não convertem texto, e `<` e `>` convertem. Explicado com teste no Node.
  - Achou que a arrow sem chaves precisa de uma expressão `true` ou `false`; qualquer expressão serve.
  - Na 05 Q3, passou `prioridadeValida("2")` em vez de `prioridadeValida` como callback, logo depois de explicar certo o `mostrar()` na 04. Corrigido no redo.
  - Usou `!=` em vez de `!==` na 04 Q2; no critério já usou `!==`.
- Próxima lição: revisão da 1a (lições 02 a 06) em 29/10/2026; revisão das regras da 1b (r02 a r04) em 30/10/2026; depois, a 1c lição 01 (onde você está: arrays e objetos).
