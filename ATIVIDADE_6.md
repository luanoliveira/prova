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