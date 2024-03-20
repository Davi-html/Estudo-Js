class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(valor){
        if(typeof valor !== 'string') return

        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }
}

const p1 = new Pessoa('davi', 'alves')

p1.nomeCompleto = 'Davi alves fernandes'

console.log(p1.nomeCompleto)