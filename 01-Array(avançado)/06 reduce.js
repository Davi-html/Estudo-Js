// filter, map, reduce

// Some todos os numeros (reduce)
// Retorne a pessoa mais velha (filter)
// Retorne um array com o dobro dos valores

const numeros = [10, 11, 81, 6, 2, 14, 64, 9, 8, 37, 21, 1]

const total = numeros.reduce((acumulador, valor)=>{
    acumulador += valor
    return acumulador++
}, 0)

// console.log(total)


// Retorne as pessoas mais velha

const pessoas = [
    {nome: 'Davi', idade: 18},
    {nome: 'Luana', idade: 64},
    {nome: 'Jonatas', idade: 23},
    {nome: 'José', idade: 56},
    {nome: 'Maria', idade: 18},
    {nome: 'Julia', idade: 28}
]

const maisVelha = pessoas.reduce((acumulador, valor)=>{
    console.log(acumulador)
    if(acumulador.idade > valor.idade) return acumulador
    return valor;
},)

console.log(maisVelha)


