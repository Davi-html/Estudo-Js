// filter, map, reduce

// dobre os numeros

const numeros = [10, 11, 81, 6, 2, 14, 64, 9, 8, 37, 21, 1]
const numerosDobro = numeros.map( valor => valor * 2)
// console.log(numerosDobro)


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// remove apenas a chave "nome" do objeto
// adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Davi', idade: 18},
    {nome: 'Luana', idade: 64},
    {nome: 'Jonatas', idade: 23},
    {nome: 'José', idade: 56},
    {nome: 'Maria', idade: 18},
    {nome: 'Julia', idade: 28}
]


const nomes = pessoas.map(objeto => objeto.nome);
const idades = pessoas.map(objeto => ({idade: objeto.idade}));

const criarId = pessoas.map((objeto, indice)=>{
    const newObject = {...objeto}
    newObject.id = indice
    return newObject
})
console.log(pessoas)





