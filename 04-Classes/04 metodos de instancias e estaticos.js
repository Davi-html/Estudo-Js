class ControleRemoto{
    constructor(tv){
        this.tv = tv 
        this.volume = 0
    }   

    // Metodo de instancia
    aumentarVolume(){
        this.volume += 2
    }

    // Metodo de instancia
    diminuirVolume(){
        this.volume -= 2
    }

    // Metodo de estatico
    static trocaPilha(){
        console.log('pilha trocada')            
    }
}

const c1 = new ControleRemoto('Lg')
c1.aumentarVolume()
console.log(c1) 

ControleRemoto.trocaPilha()
console.log(Math.random()) 