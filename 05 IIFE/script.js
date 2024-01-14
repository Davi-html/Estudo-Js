// IIFE -> Imediately invoked function expression
(function(idade, peso, altura){
    const sobrenome = 'Alves'

    function criaNome(nome){
        return `${nome} ${sobrenome}`
    }

    function falaNome(){
        console.log(criaNome('Davi'))
    }

    falaNome()

    console.log(idade, peso, altura)
})(18, 60, 1.80);
