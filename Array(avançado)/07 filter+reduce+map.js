// retorne a soma do dobro de todos os pares 
//  -> Filtrar os pares
// -> Dobrar os valores
// -> Reduzir tudo

const numeros = [10, 11, 81, 6, 2, 14, 64, 9, 8, 37, 21]

const pares = numeros.filter((valor)=>{
    return valor % 2 === 0 
}).map((valor)=>{
    return valor * 2
}).reduce((acumulador, valor)=>{
    return acumulador + valor
})

console.log(pares)