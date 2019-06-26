# Atividade 5

## Código

``` javascript
const nodes = Array.from(document.getElementsByTagName('input'))
nodes.map(node => {node.value = 'Hello World'})
```

## O que o código faz

- Na primeira linha o código pega todos as tags input da página, coloca dentro de um array e atribuí a constante 'nodes';

- Na segunda linha o código percorre cada tag input do array atribuído na constante 'nodes' através da função map e modifica o valor dos inputs para 'Hello World';