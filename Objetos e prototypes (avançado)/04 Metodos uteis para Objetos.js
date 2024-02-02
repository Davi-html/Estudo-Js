/*
Object.value
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop)
... (spread)

// Ja vimos
Object keys(retorna as chaves)
Object.freeze(congela o objeto)
Object.defineProperty(define uma propriedade)
Object.defineProperties(define varias propriedades)
*/

const tecido = { nome: 'camisa', preco: 10}

for(let entry of Object.entries(tecido)){
    console.log(entry)
}