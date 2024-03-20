
/*
0x  6x  6x  0x  5x  9x  8x  8x  7x
10  9   8   7   6   5   4   3   2
0  54  48  0  30  45  32  24  14 = 247

11 - (371 % 11) = 
se o numero for maior que 9, consideramod 0

0x  6x  6x  0x  5x  9x  8x  8x  7x  6x
11  10  9   8   7   6   5   4   3   2
0   60  54  0  35  54  40  32  21  12 = 308

*/


function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false
    
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)

    const cpfNovo = cpfParcial + digito1 + digito2
    return cpfNovo === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    
    let regressivo = cpfArray.length + 1
    const  total = cpfArray.reduce((ac, val)=>{
        ac += (regressivo * Number(val))
        regressivo--
        return ac
    }, 0)

    digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
}

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)  
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF('111.111.111-1')

if(cpf.valida()){
    console.log('CPF valido')
}else{
    console.log('CPF invalido')
}








