function tempoAleatorio(min=0, max=3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(new TypeError());
    }

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// espera('Fase 1', tempoAleatorio())
//     .then(valor => {
//         console.log(valor)
//         return espera('Fase 2', tempoAleatorio())
//     })
//     .then(valor => {
//         console.log(valor)
//         return espera('fase 3', tempoAleatorio())
//     })
//     .then(valor =>{
//         console.log(valor)
//     })
//     .catch(e =>{
//         console.log(e)
//     })

async function executa(){
    try{
        const fase1 = await espera('Fase 1', tempoAleatorio()) 
        console.log(fase1)
        const fase2 = await espera(4, tempoAleatorio()) 
        console.log(fase2)
        const fase3 = await espera('Fase 3', tempoAleatorio()) 
        console.log(fase3)
    }catch(e){
        console.log(e)
    }
    
}

executa()