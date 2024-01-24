// função
function falaOi(){
    console.log('oi')
}

falaOi()

// Function expression
const SouUmDado = function () {
    console.log('sou um dado')
}
SouUmDado()

// Arrow Function 
const funcaoArrow = ()=>{
    console.log('Sou uma arrow function')
}

funcaoArrow()

// Dentro de um objeto

const objeto = {
    falar(){
        console.log('estou falando')
    }
}

objeto.falar()