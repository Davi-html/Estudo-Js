function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter()
        },
        
        btnClear(){
            this.display.value = ' '
        },

        btnDel(){
            this.display.value = this.display.value.slice(0, -1)
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.btnRealizaConta()
                }
                
            })
        }, 

        btnRealizaConta(){
            let conta = this.display.value
            
            try{
                conta = eval(conta)
                if(!conta){
                    alert('Conta invalida')
                    return
                }
                this.display.value = String(conta)
            }catch(e){
                alert('Conta invalida')
                return
            }
        },

        cliqueBotoes(){
            document.addEventListener('click', (e)=>{
                const elemento = e.target ;
                
                if(elemento.classList.contains('btn-num')){
                    this.btnParaDisplay(elemento.innerText);
                }
                if(elemento.classList.contains('btn-clear')){
                    this.btnClear();
                }
                if(elemento.classList.contains('btn-del')){
                    this.btnDel();
                }
                if(elemento.classList.contains('btn-eq')){
                    this.btnRealizaConta();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora()
calculadora.inicia()
