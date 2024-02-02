// DefineProperty   - DefineProperties

function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave se estiver como true
        value: estoque, // valor
        writable: false, // Pode altarar o valor ou não
        configurable: false // pode reconfigurar a variavel, tipo apagar ou definir outro valor por meio da criação de outro DefineProperty
    })
}

const p1 = new Produto('Camisa', 10, 3)
console.log(p1)