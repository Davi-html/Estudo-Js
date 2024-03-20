class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenme = sobrenome
    }

    junta(){
        return `${this.nome} ${this.sobrenme}`
    }
}

const pessoa1 = new Pessoa('davi', 'Alves')

console.log(pessoa1.junta())