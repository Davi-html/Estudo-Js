// construtora -> molde (classe)

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = ()=>{
        return `${this.nome} ${this.sobrenome}`
    }
}

// instancia

const pessoa1 = new Pessoa('Davi', 'Fernandes') // <- Pessoa = Função construtora
const data = new Date()

console.dir(pessoa1)
console.dir(data)