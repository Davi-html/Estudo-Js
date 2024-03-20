function multiplicar(multiplicador){
    return function (n){
        return multiplicador * n
    }
}

let n1 = multiplicar(2)

console.log(n1(3))