class validaCPF{
    constructor(CpfEnviado){
        this.CpfEnviado = CpfEnviado 
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            value: CpfEnviado.replace(/\D+/g, '')
        })
    }

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = validaCPF.geraDigito(cpfSemDigitos)
        const digito2 = validaCPF.geraDigito(cpfSemDigitos + digito1)
        this.NovoCpf = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos){
        let total = 0
        let reverso = cpfSemDigitos.length + 1
        for(let numero of cpfSemDigitos){
            total += reverso * Number(numero)
            reverso--
        }
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }

    valida(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.eSequencia()) return false
        this.geraNovoCpf()
        
        return this.NovoCpf === this.cpfLimpo
    }
   
}

let cpf = new validaCPF('06605988760')

if(validaCPF.valida){
    console.log('CPF Valido')
}else{
    console.log('CPF Invalido')
}