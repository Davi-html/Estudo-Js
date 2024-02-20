// construtora -> molde (classe)

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    // this.nomeCompleto = ()=> `original ${this.nome} ${this.sobrenome}`
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// instancia

const pessoa1 = new Pessoa('Davi', 'Fernandes') // <- Pessoa = Função construtora

console.dir(pessoa1)