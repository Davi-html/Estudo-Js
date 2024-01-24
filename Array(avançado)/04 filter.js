// filter, map, reduce

// Retorne os numeros maiores que 10

const numeros = [10, 11, 81, 6, 2, 14, 64, 9, 8, 37, 21, 1]

const numeroFiltrados = numeros.filter(valor => valor > 10)

// console.log(numeroFiltrados)



// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termine com a 

const pessoas = [
    {nome: 'Davi', idade: 18},
    {nome: 'Luana', idade: 64},
    {nome: 'Jonatas', idade: 23},
    {nome: 'José', idade: 56},
    {nome: 'Maria', idade: 18},
    {nome: 'Julia', idade: 28}
]

const pessoasMaiorOuIgual5 = pessoas.filter((valor)=> valor.nome.length >= 5)
console.log(pessoasMaiorOuIgual5)

const maior50Anos = pessoas.filter((valor)=> valor.idade >= 50)
console.log(maior50Anos)

const terminaComA = pessoas.filter((valor)=>{
    return valor.nome.toLowerCase().endsWith('a')
})

console.log(terminaComA)




