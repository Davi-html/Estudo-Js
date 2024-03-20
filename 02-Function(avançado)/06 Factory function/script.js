function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala: function(assunto = 'falando NADA'){
            return `${this.nomeCompleto} esta ${assunto}`
        },

        altura: altura,
        peso: peso,

        // Getter
        get imc(){
            const indice = peso / (altura ** 2);
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('davi', 'alves', 1.80, 80)

p1.nomeCompleto = 'maria oliveira al'

console.log(p1.fala())