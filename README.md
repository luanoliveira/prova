# Prova para vaga de Desenvolvedor JavaScript

## Repositório GitHub
https://github.com/luanoliveira/prova

# Atividade 1

ECMAScript (ES) é a especificação formal e estruturada da linguagem JavaScript, na verdade o nome JavaScript é um "trademark" criado pela Oracle ao lançar a linguagem na década de 90.

# Atividade 2

Com o Node.js é possível executar código JavaScript no servidor de modo assíncrono e orientado a eventos.

# Atividade 3

## AngularJS

Desenvolvido em 2009 e mantido pela equipe do Google o AngularJS já é considerado ultrapassado depois do lançamento do 'Angular 2', mas ainda é muito utilizado em aplicações extremamente simples que precisam lidar com o mínimo de dinâmica em páginas html.
Desde a primeira versão já trazia a idéia de módulos e controllers, o que tornava fácil o reaproveitameento de funcionalidades, pessoalmente achava fantástico para a época.

## Angular 2, 4, 5, 6 +

O Angular 2+ corrige alguns problemas existentes no AngularJS, para isso foi reescrito do zero com a linguagem TypeScript. O TypeScript tornou a nova versão ainda mais flexivél, além disso O Angular é um framework completo, possui muitos componentes disponíveis para diversas necessidades e já está pronto!

## React

Desenvolvido pela equipe do Instagram, hoje mantido pela equipe do facebook o React é um dos frameworks javascript mais utilizado atualmente, sua proposta é proporcionar a criação de interfaces eficientes usando a sintaxe do jsx para a renderização dos componentes.

## Vue.js

Assim como o React o Vue.js é focado na criação de interaces eficientes, tem como vantagem a sua sintaxe simples e curva de aprendizado rápida. 

### Considerações finais sobre frameworks javascripts
*Os frameworks citados a cima apesar de serem arquiteturalmente bem diferentes uns dos outros, tem a mesma finalidade: facilitar o desenvolvimento web através do uso de componentes que podem ser reaproveitados em toda a aplicação.*

# Atividade 4

```javascript
$(document).ready({
    var node = $('#nome')
    node.change({
        console.log(nome.val())
    })
})
```

## Linguagens utilizadas
JavaScript, jQuery

## O que o código faz
Quando a página é lida pelo navegador uma função é atribuída ao elemento html com o id "nome", a função faz com que sempre que o valor da tag mudar um log será emitido para o console do navegador com o valor alterado.

# Atividade 5

## Código

``` javascript
const nodes = Array.from(document.getElementsByTagName('input'))
nodes.map(node => {node.value = 'Hello World'})
```

## O que o código faz

- Na primeira linha o código pega todos as tags input da página, coloca dentro de um array e atribuí a constante 'nodes';

- Na segunda linha o código percorre cada tag input do array atribuído na constante 'nodes' através da função map e modifica o valor dos inputs para 'Hello World';

# Atividade 6

## Código corrigido

``` javascript
const lista = [
    {nome: 'item 1', valor: 1},
    {nome: 'item 2', valor: 2},
    {nome: 'item 3', valor: 3},
    {nome: 'item 4', valor: 4},
    {nome: 'item 5', valor: 5},
    {nome: 'item 6', valor: 6},
]

let listaVisivel = lista

function pares() {
    listaVisivel = lista.filter(val => val.valor % 2 == 0)
}

function impares() {
    listaVisivel = lista.filter(val => val.valor % 2 > 0 )
}
```

# Atividade 7

## Código do Componente: 
https://github.com/luanoliveira/prova/blob/master/index.js

## Aplicação Online: 
https://luanoliveira.github.io/prova/index.html