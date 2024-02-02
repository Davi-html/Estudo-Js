// DefineProperty --> Getters e Setters

function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave se estiver como true
        configurable: false, // pode reconfigurar a variavel, tipo apagar ou definir outro valor por meio da criação de outro DefineProperty
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor != 'number'){
                throw TypeError('O estoque precisa ser do tipo number')
            }
            estoquePrivado = valor
        }
    })
}

const p1 = new Produto('Camisa', 10, 3)
p1.estoque = 12
console.log(p1)