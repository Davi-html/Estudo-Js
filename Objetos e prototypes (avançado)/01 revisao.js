// Constructor Function

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this)
}

const p1 = new Pessoa('Davi', 'Fernandes')
console.log(p1)


//////////////////////////////////////////////////////////////////////////////////////////////////

// Factory Function

// function criaPessoa(nome, sobrenome){
    // return {
        // nome,
        // sobrenome,
        // get nomeCompleto(){
            // return `${this.nome} ${this.sobrenome}`
        // }
    // }
// }

// const p1 = criaPessoa('davi', 'fernandes')
// console.log(p1.nomeCompleto)

///////////////////////////////////////////////////////////////////////////////////////////////

// const pessoa = new Object() 
// pessoa.nome = 'Davi'
// pessoa.sobrenome = 'Alves'
// pessoa.idade = 18

// pessoa.falarNome = function(){
//     return (`${this.nome} esta falando`)
// }

// pessoa.getDataNascimento = function(){
//     const dataAtual = new Date()

//     return dataAtual.getFullYear() - this.idade
// }

// console.log(pessoa.getDataNascimento())
// pessoa.falarNome()

////////////////////////////////////////////////////////////////////////////////////////////////